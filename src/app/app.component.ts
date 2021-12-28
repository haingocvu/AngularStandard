import { Component, OnInit } from '@angular/core';
import { WinWheelService } from '@app/services/winWheel/win-wheel.service';
import { take } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { parseResponse } from '@app/utils/httpUtils';
@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private winWheelService: WinWheelService) {}

  title = 'angularStandard';

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this.winWheelService
      .getWinWheelData('lucky_wheel')
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        parseResponse(value, (data) => console.log(data));
      });
  }
}
