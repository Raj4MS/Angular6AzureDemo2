import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpCacheService } from './http-cache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    constructor(private cacheService: HttpCacheService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.method.toLowerCase() !== 'get') {
            this.cacheService.invalidateCache();
            return next.handle(req);
        }

        const cacheResponse: HttpResponse<any> = this.cacheService.get(req.url);
        if (cacheResponse) {
            console.log(`Returing cached response of ${cacheResponse.url}`);
            return of(cacheResponse);
        }
        return next.handle(req)
            .pipe(
                tap(response => {
                    if (response instanceof HttpResponse) {
                        console.log(`Caching response of ${req.url}`);
                        this.cacheService.put(req.url, response);
                    }
                })
            );




    }
}
