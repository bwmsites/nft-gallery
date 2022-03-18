import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreatorsType } from '../GetParsedNftAccountsByOwnerResponseType';

@ObjectType('attributes')
export class AttributesType {
    @Field()
    type: string;
    @Field()
    value: string;
}

@ObjectType('collection')
export class CollectionType {
    @Field()
    name: string;
    @Field()
    family: string;
}

@ObjectType('files')
export class FileType {
    @Field()
    fileUrl: string;
    @Field()
    fileType: string;
}

@ObjectType('creators')
export class CreatorType {
    @Field()
    address: string;
    @Field()
    isVerified: boolean;
    @Field()
    share: number;
}

@ObjectType('properties')
export class PropertyType {
    @Field(() => [FileType])
    files: FileType[];
    @Field()
    category: string;
    @Field(() => [CreatorType])
    creators: CreatorsType[];
}

@ObjectType()
export class NftDetailsType {
    @Field()
    nftName: string;
    @Field()
    symbol: string;
    @Field()
    description: string;
    @Field((type) => Int)
    sellerFeeBasisPoints: number;
    @Field()
    imageUrl: string;
    @Field()
    externalUrl: string;
    @Field((type) => [AttributesType])
    atributes: AttributesType[];
    @Field((type) => CollectionType)
    collection: CollectionType;
    @Field((type) => PropertyType)
    properties: PropertyType;
}

@ObjectType()
export class NftType {
    @Field((type) => Int)
    id: number;
    @Field()
    updateAuthority: string;
    @Field()
    mint: string;
    @Field((type) => NftDetailsType)
    details: NftDetailsType;
    @Field()
    primarySaleHappened: boolean;
    @Field()
    isMutable: boolean;
}
