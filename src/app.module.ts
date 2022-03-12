import { Module } from '@nestjs/common';
import { AppConfigModule } from '@config/app/config.module';
import { HealthCheckModule } from '@src/health-check/health-check.module';

@Module({
    imports: [AppConfigModule, HealthCheckModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
