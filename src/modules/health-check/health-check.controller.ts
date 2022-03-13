import { Controller, Get } from '@nestjs/common';

import type { HealthCheckResponseType } from '@common/type/HealthCheckResponseType';
import { HealthCheckService } from '@modules/health-check/health-check.service';

@Controller('_health')
export class HealthCheckController {
    constructor(private _healthCheckService: HealthCheckService) {}

    @Get()
    checkServerHealt(): HealthCheckResponseType {
        return this._healthCheckService.checkServerHealth();
    }
}
