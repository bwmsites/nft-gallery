import { version } from '@src/../package.json';
import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    env: process.env.APP_ENV,
    name: process.env.APP_NAME,
    url: process.env.APP_URL,
    port: process.env.APP_PORT,
    version,
}));
