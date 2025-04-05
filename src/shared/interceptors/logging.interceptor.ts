import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const { method, url } = req;
    const now = Date.now();

    console.log(`[Request] ${method} ${url}`);

    return next.handle().pipe(
      tap(() => {
        const time = Date.now() - now;
        console.log(`[Response] ${method} ${url} - ${time}ms`);
      }),
    );
  }
}
