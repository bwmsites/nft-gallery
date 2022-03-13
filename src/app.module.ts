import { Module } from '@nestjs/common';
import { AppConfigModule } from '@config/app/config.module';
import { HealthCheckModule } from '@modules/health-check/health-check.module';
import { SolanaModule } from '@modules/solana/solana.module';
import { SolanaService } from '@modules/solana/solana.service';

@Module({
    imports: [AppConfigModule, HealthCheckModule, SolanaModule],
    controllers: [],
    providers: [SolanaService],
})
export class AppModule {}
