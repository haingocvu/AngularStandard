import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Result } from '@app/interfaces/http.interface';
import { WinWheelData, SpinResult } from '@app/interfaces/win-wheel.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WinWheelService {
  constructor(private http: HttpClient) {}

  getActiveCampaignByType(type: string): Observable<Result<WinWheelData>> {
    return this.http.get<Result<WinWheelData>>(
      environment.apiURL + '/my-hdsaison/campaign',
      {
        params: { type },
      }
    );
  }

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
