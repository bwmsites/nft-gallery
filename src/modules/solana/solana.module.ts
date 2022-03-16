import { CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SolanaService } from '@modules/solana/solana.service';
import { SolanaController } from '@modules/solana/solana.controller';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
        CacheModule.register({ ttl: 0 }),
    ],
    providers: [SolanaService],
    controllers: [SolanaController],
})
export class SolanaModule {}
