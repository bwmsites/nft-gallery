import { HttpStatus, Injectable } from '@nestjs/common';
import {
    resolveToWalletAddress,
    getParsedNftAccountsByOwner,
} from '@nfteyez/sol-rayz';
import { CustomHttpExceptionHelper } from '@common/helpers/exception/custom-http-exception.helper';
import { SolanaServiceResponseParser } from './parser/solana-service-response-parser';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import type { GetParsedNftAccountsByOwnerResponseType } from '@common/type/GetParsedNftAccountsByOwnerResponseType';
import type { GetNftsByAddressResponseType } from '@common/type/GetNftsByAddressResponseType';
import type { GetParsedNftAccountsByOwnerDetailsResponseType } from '@common/type/GetParsedNftAccountsByOwnerDetailsResponseType';

@Injectable()
export class SolanaService {
    constructor(private httpService: HttpService) {}

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
            const publicAddress = await resolveToWalletAddress({
                text: address,
            });

            const nftData: GetParsedNftAccountsByOwnerResponseType[] =
                await getParsedNftAccountsByOwner({
                    publicAddress,
                });

            return SolanaServiceResponseParser.getNftsByAddress(
                nftData,
                async (url: string) => this.getNftDetails(url),
            );
        } catch (error) {
            console.log('Error while trying to fecth NFTs', error.message);
            throw new CustomHttpExceptionHelper(
                error,
                HttpStatus.UNPROCESSABLE_ENTITY,
            );
        }
    }
}
