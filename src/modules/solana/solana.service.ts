import { HttpStatus, Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import {
    resolveToWalletAddress,
    getParsedNftAccountsByOwner,
} from '@nfteyez/sol-rayz';
import { Cache } from 'cache-manager';
import { CustomHttpExceptionHelper } from '@common/helpers/exception/custom-http-exception.helper';
import { SolanaServiceResponseParser } from './parser/solana-service-response-parser';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import type { GetParsedNftAccountsByOwnerResponseType } from '@common/type/GetParsedNftAccountsByOwnerResponseType';
import type { GetNftsByAddressResponseType } from '@common/type/GetNftsByAddressResponseType';
import type { GetParsedNftAccountsByOwnerDetailsResponseType } from '@common/type/GetParsedNftAccountsByOwnerDetailsResponseType';

@Injectable()
export class SolanaService {
    constructor(
        private httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    private async getNftDetails(
        url: string,
    ): Promise<GetParsedNftAccountsByOwnerDetailsResponseType> {
        const { data: responseData } = await firstValueFrom(
            this.httpService.get(url),
        );

        return responseData as GetParsedNftAccountsByOwnerDetailsResponseType;
    }

    async getNftsByAddress(
        address: string,
    ): Promise<GetNftsByAddressResponseType[]> {
        try {
            // Checks if there are data cached for the given address
            const cachedResponse = await this.cacheManager.get(address);

            // Returns de cached response
            if (cachedResponse && cachedResponse != null) {
                return cachedResponse as GetNftsByAddressResponseType[];
            }

            const publicAddress = await resolveToWalletAddress({
                text: address,
            });

            const nftData: GetParsedNftAccountsByOwnerResponseType[] =
                await getParsedNftAccountsByOwner({
                    publicAddress,
                });

            const responseData =
                await SolanaServiceResponseParser.getNftsByAddress(
                    nftData,
                    async (url: string) => this.getNftDetails(url),
                );

            // Caches response data
            await this.cacheManager.set(address, responseData);

            return responseData;
        } catch (error) {
            console.log('Error while trying to fecth NFTs', error.message);
            throw new CustomHttpExceptionHelper(
                error,
                HttpStatus.UNPROCESSABLE_ENTITY,
            );
        }
    }
}
