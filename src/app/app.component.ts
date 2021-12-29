import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WinWheelData } from '@app/interfaces/win-wheel.interface';
import { StoreInterface } from '@app/interfaces/store.interface';
import { getWinWheelData } from '@app/store/actions/win-wheel.actions';
import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<StoreInterface>) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      this.winWheelRawData = data;
      console.log(this.winWheelRawData);
    });
  }

  title = 'angularStandard';

  winWheelData$: Observable<GenericReducerState<WinWheelData>>;
  winWheelRawData: GenericReducerState<WinWheelData> | null = null;

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this.store.dispatch(getWinWheelData('lucky_wheel'));
  }
}
