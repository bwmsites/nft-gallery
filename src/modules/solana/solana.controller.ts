import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { SolanaService } from '@modules/solana/solana.service';
import { CustomValidatorPipe } from '@common/pipes/custom-validator.pipe';
import { getNftsByAddressSchema } from './schemas/get-nfts-by-address.schema';

@Controller('solana/nfts')
export class SolanaController {
    constructor(private _solanaService: SolanaService) {}

    @Get()
    @UsePipes(new CustomValidatorPipe(getNftsByAddressSchema))
    async getNftsByAddress(@Query('address') address): Promise<unknown> {
        return this._solanaService.getNftsByAddress(address);
    }
}
