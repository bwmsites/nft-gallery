export type GetParsedNftAccountsByOwnerDetailsResponseType = {
    name: string;
    description: string;
    symbol: string;
    seller_fee_basis_points: number;
    image: string;
    external_url: string;
    attributes: {
        trait_type: string;
        value: string;
    }[];
    collection: {
        name: string;
        family: string;
    };
    properties: {
        files: {
            uri: string;
            type: string;
        }[];
        category: string;
    };
};
