export type GetNftsByAddressResponseFileType = {
    fileUrl: string;
    fileType: string;
};

export type GetNftsByAddressResponseAttributeType = {
    type: string;
    value: string;
};

export type GetNftsByAddressResponseDetailType = {
    nftName: string;
    symbol: string;
    description: string;
    sellerFeeBasisPoints: number;
    imageUrl: string;
    externalUrl: string;
    atributes: {
        type: string;
        value: string;
    }[];
    collection: {
        name: string;
        family: string;
    };
    properties: {
        files: GetNftsByAddressResponseFileType[];
        category: string;
        creators: {
            address: string;
            isVerified: boolean;
            share: number;
        }[];
    };
};

export type GetNftsByAddressResponseType = {
    id: number;
    updateAuthority: string;
    mint: string;
    details: GetNftsByAddressResponseDetailType;
    primarySaleHappened: boolean;
    isMutable: boolean;
};
