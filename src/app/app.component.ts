import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';

import { getWinWheelData } from '@app/store/actions/win-wheel.actions';
import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { IStoreState } from '@app/interfaces/store.interface';
import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<IStoreState>,
    private spinner: NgxSpinnerService
  ) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      const { isLoading } = data;
      if (!isLoading) {
        this.spinner.hide();
        this.title = data.data?.name || 'Vòng quay may mắn';
      }
    });
  }

  title = 'Vòng quay may mắn';
  winWheelData$: Observable<IGenericReducerState<IWinWheel>>;

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this.store.dispatch(getWinWheelData('lucky_wheel'));
    this.spinner.show();
  }
}
