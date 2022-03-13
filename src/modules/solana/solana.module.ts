import { Module } from '@nestjs/common';
import { SolanaService } from '@modules/solana/solana.service';
import { SolanaController } from '@modules/solana/solana.controller';

@Module({
    providers: [SolanaService],
    controllers: [SolanaController],
})
export class SolanaModule {}
