import { Component, OnInit } from '@angular/core';
import { WinWheelService } from '@app/services/winWheel/win-wheel.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';

import { parseResponse } from '@app/utils/http.util';
import { Observable } from 'rxjs';

import { WinWheelData } from '@app/interfaces/win-wheel.interface';
import { StoreInterface } from '@app/interfaces/store.interface';
import { getWinWheelData } from '@app/store/actions/win-wheel.actions';
@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private winWheelService: WinWheelService,
    private store: Store<StoreInterface>
  ) {
    this.winWheelData$ = this.store.select('winWheelData');
  }

  title = 'angularStandard';

  winWheelData$: Observable<WinWheelData>;

  ngOnInit(): void {
    this.initialData();
    this.store.dispatch(getWinWheelData());
  }

  initialData() {
    this.winWheelService
      .getActiveCampaignByType('lucky_wheel')
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        parseResponse(value, (data) => console.log(data));
      });
  }
}
