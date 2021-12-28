import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Result } from '@app/interfaces/http';
import { WinWheelData } from '@app/interfaces/winWheel';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WinWheelService {
  constructor(private http: HttpClient) {}

  getWinWheelData(type: string) {
    return this.http.get(environment.apiURL, { params: { type } });
  }
}
