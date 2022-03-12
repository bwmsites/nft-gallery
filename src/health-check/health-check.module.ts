import { Module } from '@nestjs/common';
import { AppConfigModule } from '@src/config/app/config.module';
import { HealthCheckService } from '@src/health-check/health-check.service';
import { HealthCheckController } from '@src/health-check/health-check.controller';

@Module({
    imports: [AppConfigModule],
    providers: [HealthCheckService],
    controllers: [HealthCheckController],
})
export class HealthCheckModule {}
