import type {
    GetParsedNftAccountsByOwnerResponseDataType,
    GetParsedNftAccountsByOwnerResponseType,
} from '@common/type/GetParsedNftAccountsByOwnerResponseType';
import type {
    GetNftsByAddressResponseDetailType,
    GetNftsByAddressResponseType,
} from '@common/type/GetNftsByAddressResponseType';
import type { GetParsedNftAccountsByOwnerDetailsResponseType } from '@common/type/GetParsedNftAccountsByOwnerDetailsResponseType';

export abstract class SolanaServiceResponseParser {
    private static parseDetails(
        responseDetails: GetParsedNftAccountsByOwnerDetailsResponseType,
        responseData: GetParsedNftAccountsByOwnerResponseDataType,
    ): GetNftsByAddressResponseDetailType {
        return {
            nftName: responseDetails.name,
            symbol: responseDetails.symbol,
            description: responseDetails.description,
            sellerFeeBasisPoints: responseDetails.seller_fee_basis_points,
            imageUrl: responseDetails.image,
            externalUrl: responseDetails.external_url,
            atributes: responseDetails.attributes.map((attrib) => ({
                type: attrib.trait_type,
                value: attrib.value,
            })),
            collection: responseDetails.collection,
            properties: {
                files: responseDetails.properties.files.map((file) => ({
                    fileType: file.type,
                    fileUrl: file.uri,
                })),
                category: responseDetails.properties.category,
                creators: responseData.creators.map((creator) => ({
                    address: creator.address,
                    isVerified: creator.verified !== 0,
                    share: creator.share,
                })),
            },
        };
    }

    static getNftsByAddress(
        responseData: GetParsedNftAccountsByOwnerResponseType,
        detailsResponseData: GetParsedNftAccountsByOwnerDetailsResponseType,
    ): GetNftsByAddressResponseType {
        return {
            id: responseData.key,
            updateAuthority: responseData.updateAuthority,
            mint: responseData.mint,
            details: this.parseDetails(detailsResponseData, responseData.data),
            isMutable: responseData.isMutable,
            primarySaleHappened: responseData.primarySaleHappened,
        };
    }
}
