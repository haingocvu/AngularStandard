import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { StoreInterface } from '@app/interfaces/store.interface';
import { getWinWheelData } from '@app/store/actions/win-wheel.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<StoreInterface>) {}

  title = 'angularStandard';

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this.store.dispatch(getWinWheelData('lucky_wheel'));
  }
}
