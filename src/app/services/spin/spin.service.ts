import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Result } from '@app/interfaces/http.interface';
import { SpinResult } from '@app/interfaces/win-wheel.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpinService {
  constructor(private http: HttpClient) {}

  spin(
    campaignId: string,
    headerConfig: HttpHeaders
  ): Observable<Result<SpinResult>> {
    return this.http.post<Result<SpinResult>>(
      `${environment.apiURL}/my-hdsaison/campaign/${campaignId}/spin`,
      null,
      { headers: headerConfig }
    );
  }
}
