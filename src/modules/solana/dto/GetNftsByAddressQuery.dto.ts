import { IsString } from 'class-validator';

export class GetNftsByAddressQueryDTO {
    @IsString()
    public address: string;
}
