import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

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
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private store: Store<IStoreState>,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog // private messageService: MessageService
  ) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      const { isLoading, data: wheelData } = data;
      if (!isLoading) {
        this.spinner.hide();
        if (wheelData) {
          this.shouldShowWinWheelComponent = true;
        }
      }
    });
  }
  ngAfterViewInit(): void {}

  title = 'Vòng quay may mắn';
  winWheelData$: Observable<IGenericReducerState<IWinWheel>>;
  shouldShowWinWheelComponent = false;

  ngOnInit(): void {
    this.initialData();
  }

  initialData() {
    this.store.dispatch(getWinWheelData('lucky_wheel'));
    this.spinner.show();
  }
}
