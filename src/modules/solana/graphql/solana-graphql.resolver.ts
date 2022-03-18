import { Resolver, Query, Args } from '@nestjs/graphql';
import { NftType } from '@src/common/type/graphql/NftType';
import { SolanaGraphQLService } from '@modules/solana/graphql/solana-graphql.service';

@Resolver((of) => NftType)
export class SolanaGraphQLResolver {
    constructor(private solanaService: SolanaGraphQLService) {}

    @Query((returns) => [NftType], { name: 'nfts' })
    async nfts(@Args('address') address: string): Promise<NftType[]> {
        const result = await this.solanaService.getNftsByAddress(address);
        return result;
    }
}
