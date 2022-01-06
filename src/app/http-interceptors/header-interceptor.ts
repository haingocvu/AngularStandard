import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { getParamsFromUrl } from '@app/utils/url.util';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const firstParam = getParamsFromUrl('username');
    const secondParam = getParamsFromUrl('password');
    // Clone the request to add the new header
    const clonedRequest = req.clone({
      headers: req.headers
        .append(
          'Authorization',
          'Basic ' + btoa(`${firstParam}:${secondParam}`)
        )
        .append('Access-Control-Allow-Origin', '*'),
    });
    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
