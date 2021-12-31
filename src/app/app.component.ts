import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

import { getWinWheelData } from '@app/store/actions/win-wheel.actions';
import { WinWheelData } from '@app/interfaces/win-wheel.interface';
import { StoreInterface } from '@app/interfaces/store.interface';
import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<StoreInterface>,
    private spinner: NgxSpinnerService
  ) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      const { isLoading, data: wheelData } = data;
      debugger;
      if (!isLoading && wheelData) {
        this.spinner.hide();
      }
    });
  }

  title = 'angularStandard';
  winWheelData$: Observable<GenericReducerState<WinWheelData>>;

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this.spinner.show();
    this.store.dispatch(getWinWheelData('lucky_wheel'));
  }
}
