import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { SolanaService } from '@modules/solana/solana.service';
import { GetNftsByAddressQueryDTO } from '@modules/solana/dto/GetNftsByAddressQuery.dto';

@Controller('solana/nfts')
export class SolanaController {
    constructor(private _solanaService: SolanaService) {}

    @Get()
    async getNftsByAddress(
        @Query(
            new ValidationPipe({
                transform: true,
                transformOptions: { enableImplicitConversion: true },
                forbidNonWhitelisted: true,
            }),
        )
        query: GetNftsByAddressQueryDTO,
    ): Promise<unknown> {
        const { address } = query;
        return this._solanaService.getNftsByAddress(address);
    }
}
