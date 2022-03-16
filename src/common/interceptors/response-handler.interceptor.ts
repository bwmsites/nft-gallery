import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ServiceHttpResponse<T> {
    links: { self: string };
    data: T;
}

@Injectable()
export class ResponseHandlerInterceptor<T>
    implements NestInterceptor<T, ServiceHttpResponse<T>>
{
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<ServiceHttpResponse<T>> {
        const [requestArg] = context.getArgs();
        const links = {
            self: `${context.getType()}://${requestArg.headers.host}${
                requestArg.originalUrl
            }`,
        };

        return next.handle().pipe(map((data) => ({ links, data })));
    }
}
