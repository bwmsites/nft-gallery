import { HttpStatus, Injectable } from '@nestjs/common';
import {
    resolveToWalletAddress,
    getParsedNftAccountsByOwner,
} from '@nfteyez/sol-rayz';
import { CustomHttpExceptionHelper } from '@common/helpers/exception/custom-http-exception.helper';

import exampleResponse from '../../../solana-example-response.json';

@Injectable()
export class SolanaService {
    async getNftsByAddress(address: string): Promise<unknown> {
        try {
            // TODO: Remove this part after creating response parser
            return await Promise.resolve(exampleResponse);

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
