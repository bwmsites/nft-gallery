import { Injectable, Logger } from '@nestjs/common';
import {
    getParsedNftAccountsByOwner,
    resolveToWalletAddress,
} from '@nfteyez/sol-rayz';
import { GetParsedNftAccountsByOwnerResponseType } from '@src/common/type/GetParsedNftAccountsByOwnerResponseType';
import { NftType } from '@src/common/type/graphql/NftType';
import { SolanaGraphQLServiceResponseParser } from '../parser/solana-graphql-service-response.parser';

@Injectable()
export class SolanaGraphQLService {
    private logger = new Logger(SolanaGraphQLService.name);

    async getNftsByAddress(address: string): Promise<NftType[]> {
        try {
            const publicAddress = await resolveToWalletAddress({
                text: address,
            });

            const nftData: GetParsedNftAccountsByOwnerResponseType[] =
                await getParsedNftAccountsByOwner({
                    publicAddress,
                });

            return SolanaGraphQLServiceResponseParser.getNftsByAddress(nftData);
        } catch (error) {
            this.logger.error(
                'Could not fetch nfts through GraphQL Service due to error: ',
                error,
            );
            throw error;
        }
    }
}
