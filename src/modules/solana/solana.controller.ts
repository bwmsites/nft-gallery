import {
    Controller,
    Get,
    Query,
    UseInterceptors,
    ValidationPipe,
} from '@nestjs/common';
import { SolanaService } from '@modules/solana/solana.service';
import { GetNftsByAddressQueryDTO } from '@modules/solana/dto/GetNftsByAddressQuery.dto';
import { ResponseHandlerInterceptor } from '@common/interceptors/response-handler.interceptor';

@Controller('solana/nfts')
@UseInterceptors(ResponseHandlerInterceptor)
export class SolanaController {
    constructor(private _solanaService: SolanaService) {}

    @Get()
    async getNftsByAddress(
        @Query(
            new ValidationPipe({
                forbidNonWhitelisted: true,
            }),
        )
        query: GetNftsByAddressQueryDTO,
    ): Promise<unknown> {
        const { address } = query;

        return this._solanaService.getNftsByAddress(address);
    }
}
