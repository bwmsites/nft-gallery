import { HttpStatus, Injectable } from '@nestjs/common';
import {
    resolveToWalletAddress,
    getParsedNftAccountsByOwner,
} from '@nfteyez/sol-rayz';
import { CustomHttpExceptionHelper } from '@src/helpers/exception/custom-http-exception.helper';

@Injectable()
export class SolanaService {
    async getNftsByAddress(address: string): Promise<unknown> {
        try {
            const publicAddress = await resolveToWalletAddress({
                text: address,
            });

            // TODO: Understand payload and create response types
            return await getParsedNftAccountsByOwner({ publicAddress });
        } catch (error) {
            console.log('Error while trying to fecth NFTs', error.message);
            throw new CustomHttpExceptionHelper(
                error,
                HttpStatus.UNPROCESSABLE_ENTITY,
            );
        }
    }
}