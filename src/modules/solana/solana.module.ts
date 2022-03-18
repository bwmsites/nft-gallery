import { CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SolanaService } from '@modules/solana/solana.service';
import { SolanaController } from '@modules/solana/solana.controller';
import { SolanaGraphQLService } from '@modules/solana/graphql/solana-graphql.service';
import { SolanaGraphQLResolver } from './graphql/solana-graphql.resolver';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
        CacheModule.register({ ttl: 120 }),
    ],
    providers: [SolanaService, SolanaGraphQLService, SolanaGraphQLResolver],
    controllers: [SolanaController],
})
export class SolanaModule {}
