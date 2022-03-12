import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckService } from './health-check.service';
import { AppConfigModule } from '@config/app/config.module';

import { version } from '../../package.json';

describe('HealthCheckService', () => {
    let service: HealthCheckService;
    const appEnv = process.env.APP_ENV;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppConfigModule],
            providers: [HealthCheckService],
        }).compile();

        service = module.get<HealthCheckService>(HealthCheckService);
    });

    it('should return server information', () => {
        const result = service.checkServerHealth();
        expect(result).toMatchObject({
            serverVersion: version,
            environment: appEnv,
        });
    });
});
