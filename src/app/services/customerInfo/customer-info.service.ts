import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IHttpResult } from '@app/interfaces/http.interface';
import { ICustomerInfo } from '@app/interfaces/customerInfo.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerInfoService {
  constructor(private http: HttpClient) {}

  getCustomerInfo(
    campaignId: string,
    headerConfig: HttpHeaders
  ): Observable<IHttpResult<ICustomerInfo>> {
    return this.http.post<IHttpResult<ICustomerInfo>>(
      `${environment.apiURL}/my-hdsaison/campaign/${campaignId}/spin-info`,
      null,
      { headers: headerConfig }
    );
  }
}
