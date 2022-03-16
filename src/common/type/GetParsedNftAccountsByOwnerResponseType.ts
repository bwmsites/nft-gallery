export type CreatorsType = {
    address: string;
    verified: number;
    share: number;
};

export type GetParsedNftAccountsByOwnerResponseDataType = {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: CreatorsType[];
};

export type GetParsedNftAccountsByOwnerResponseType = {
    key: number;
    updateAuthority: string;
    mint: string;
    data: GetParsedNftAccountsByOwnerResponseDataType;
    primarySaleHappened: boolean;
    isMutable: boolean;
    editionNonce: unknown | null;
};
