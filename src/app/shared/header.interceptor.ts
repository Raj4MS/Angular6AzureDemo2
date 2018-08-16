import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const modifiedRequest: HttpRequest<any> = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const jsonReq = JSON.stringify(modifiedRequest);
        console.log(`Header interceptor ${jsonReq}`);
        return next.handle(modifiedRequest);
    }
}
