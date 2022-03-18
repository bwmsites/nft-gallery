import { GetParsedNftAccountsByOwnerResponseType } from '@src/common/type/GetParsedNftAccountsByOwnerResponseType';
import { NftType } from '@common/type/graphql/NftType';

export abstract class SolanaGraphQLServiceResponseParser {
    static getNftsByAddress(
        responseData: GetParsedNftAccountsByOwnerResponseType[],
    ): NftType[] {
        return responseData.map(
            (response) =>
                ({
                    id: response.key,
                    mint: response.mint,
                    updateAuthority: response.updateAuthority,
                    isMutable: response.isMutable,
                    primarySaleHappened: response.primarySaleHappened,
                } as NftType),
        );
    }
}
