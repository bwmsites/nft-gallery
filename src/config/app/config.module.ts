import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { AppConfigService } from '@config/app/config.service';
import { AppEnvEnum } from '@common/enums/AppEnvEnums';
import configuration from '@config/app/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                APP_NAME: Joi.string().default('wisdon-nft'),
                APP_ENV: Joi.string()
                    .valid(
                        AppEnvEnum.DEVELOPMENT,
                        AppEnvEnum.TEST,
                        AppEnvEnum.PRODUCTION,
                    )
                    .default(AppEnvEnum.DEVELOPMENT),
                APP_URL: Joi.string().default('http://localhost'),
                APP_PORT: Joi.number().integer().default(3001),
            }),
        }),
    ],
    providers: [ConfigService, AppConfigService],
    exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
