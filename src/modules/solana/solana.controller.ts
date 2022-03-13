import { Controller, Get } from '@nestjs/common';
import { SolanaService } from '@modules/solana/solana.service';

@Controller('solana/nfts')
export class SolanaController {
    constructor(private _solanaService: SolanaService) {}

    @Get()
    async getNftsByAddress(): Promise<unknown> {
        // TODO: get token thru params
        const address = 'GzYfWA3af4M29VdmDaCvUvyUnm9JkFZsybFoRg2J31qJ';

        return this._solanaService.getNftsByAddress(address);
    }
}
