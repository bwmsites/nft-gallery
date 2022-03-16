import { CacheModule, Module, Provider } from '@nestjs/common';
import { AppConfigModule } from '@config/app/config.module';
import { HealthCheckModule } from '@modules/health-check/health-check.module';
import { SolanaModule } from '@modules/solana/solana.module';
import { SolanaService } from '@modules/solana/solana.service';
import { HttpModule } from '@nestjs/axios';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

const ThrottlerProvider: Provider = {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
};

@Module({
    imports: [
        AppConfigModule,
        HealthCheckModule,
        SolanaModule,
        HttpModule,
        CacheModule.register({ ttl: 120 }),
        ThrottlerModule.forRoot({
            ttl: 90,
            limit: 10,
        }),
    ],
    controllers: [],
    providers: [SolanaService, ThrottlerProvider],
})
export class AppModule {}
