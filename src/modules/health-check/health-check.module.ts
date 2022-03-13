import { Module } from '@nestjs/common';
import { AppConfigModule } from '@config/app/config.module';
import { HealthCheckService } from '@modules/health-check/health-check.service';
import { HealthCheckController } from '@modules/health-check/health-check.controller';

@Module({
    imports: [AppConfigModule],
    providers: [HealthCheckService],
    controllers: [HealthCheckController],
})
export class HealthCheckModule {}
