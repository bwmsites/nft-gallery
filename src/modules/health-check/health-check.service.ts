import { Injectable } from '@nestjs/common';
import { AppConfigService } from '@config/app/config.service';

import type { HealthCheckResponseType } from '@common/type/HealthCheckResponseType';

@Injectable()
export class HealthCheckService {
    constructor(private readonly _appConfigService: AppConfigService) {}

    checkServerHealth(): HealthCheckResponseType {
        return {
            serverVersion: this._appConfigService.version,
            environment: this._appConfigService.env,
        };
    }
}
