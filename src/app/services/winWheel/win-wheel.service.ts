import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IHttpResult } from '@app/interfaces/http.interface';
import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WinWheelService {
  constructor(private http: HttpClient) {}

  getActiveCampaignByType(type: string): Observable<IHttpResult<IWinWheel>> {
    return this.http.get<IHttpResult<IWinWheel>>(
      environment.apiURL + '/my-hdsaison/campaign',
      {
        params: { type },
      }
    );
  }
}
