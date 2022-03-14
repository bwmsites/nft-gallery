import { HttpException } from '@nestjs/common';

export class CustomHttpExceptionHelper extends HttpException {
    constructor(error: Error, httpStatus: number) {
        super(
            {
                statusCode: httpStatus,
                title: error.name,
                message: error.message,
            },
            httpStatus,
        );
    }
}
