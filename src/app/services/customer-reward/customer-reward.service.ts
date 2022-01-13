import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { IHttpResult } from '@app/interfaces/http.interface';
import { ICustomerReward } from '@app/interfaces/customer-reward.interface';
// import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CustomerRewardService {
  constructor(private http: HttpClient) {}

  getCustomerRewardList(
    pageSize: number,
    pageNum: number,
    query: string | undefined = '',
    sort: string | undefined = 'asc'
  ): Observable<IHttpResult<Array<ICustomerReward>>> {
    let params = new HttpParams()
      .set('pageSize', pageSize)
      .set('pageNum', pageNum)
      .set('query', query)
      .set('sort', sort);
    return this.http.get<IHttpResult<Array<ICustomerReward>>>(
      'api/list-customer/',
      {
        params,
      }
    );
  }
}
