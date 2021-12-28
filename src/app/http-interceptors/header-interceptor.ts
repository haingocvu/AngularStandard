import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({
      headers: req.headers
        .append(
          'Authorization',
          'Basic ' + btoa('campaign_user:campaign!p@ssw0rd')
        )
        .append('Access-Control-Allow-Origin', '*'),
    });
    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
