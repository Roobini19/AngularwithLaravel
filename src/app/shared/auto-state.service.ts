import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = this.tokenService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + accessToken
      }
    });

    return next.handle(req);
  }

}
