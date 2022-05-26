import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';
import { TokenStorageService } from './Services/token-storage.service';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService:TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = 'abc';
    request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
    return next.handle(request);
  }
}
