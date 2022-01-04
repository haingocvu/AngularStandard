import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { IStoreState } from '@app/interfaces/store.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';

import { SignInComponent } from '@app/components/sign-in/sign-in.component';
import { customerInfoDataSelector } from '@app/store/selectors/customerInfo.selector';
import { ICustomerInfo } from '@app/interfaces/customerInfo.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  winWheelData$: Observable<IGenericReducerState<IWinWheel>>;
  winWheelRawData: IGenericReducerState<IWinWheel> | null = null;
  customerInfo$: Observable<IGenericReducerState<ICustomerInfo>>;
  customerInfoRawData: IGenericReducerState<ICustomerInfo> | null = null;

  constructor(private store: Store<IStoreState>, public dialog: MatDialog) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      this.winWheelRawData = data;
    });

    this.customerInfo$ = this.store.select(customerInfoDataSelector);
    this.customerInfo$.subscribe((data) => {
      this.customerInfoRawData = data;
    });
  }

  openDialogSignIn() {
    const isLoading = this.customerInfoRawData?.isLoading;
    const rawData = this.customerInfoRawData?.data;

    if (!isLoading && rawData) {
      // spin the wheel
      console.log('spin now');
    } else {
      // authentication
      const dialogRef = this.dialog.open(SignInComponent);
      dialogRef.afterClosed().subscribe(() => {
        console.log(`success signin`);
      });
    }
  }

  get isShowRemainingTurns() {
    return this.customerInfoRawData?.data?.remainingTurns;
  }

  get getRemainingTurns() {
    return this.customerInfoRawData?.data?.remainingTurns;
  }

  ngOnInit(): void {}
}
