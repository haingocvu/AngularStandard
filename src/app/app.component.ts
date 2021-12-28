import { Component, OnInit } from '@angular/core';
import { WinWheelService } from '@app/services/winWheel/win-wheel.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private winWheelService: WinWheelService) {}
  ngOnInit(): void {
    debugger;
    this.winWheelService
      .getWinWheelData('lucky_wheel')
      .pipe(take(1))
      .subscribe((value) => {
        debugger;
        console.log(value);
      });
  }
  title = 'angularStandard';
}
