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
import { ISpinResult } from '@app/interfaces/spin.interface';
import { spinDataSelector } from '@app/store/selectors/spin.selector';
import { MessageService } from '@app/services/message/message.service';
import { RulesComponent } from '@app/components/rules/rules.component';
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
  spinData$: Observable<IGenericReducerState<ISpinResult>>;
  spinRawData: IGenericReducerState<ISpinResult> | null = null;

  constructor(
    private store: Store<IStoreState>,
    public dialog: MatDialog,
    private messageService: MessageService
  ) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      this.winWheelRawData = data;
    });

    this.customerInfo$ = this.store.select(customerInfoDataSelector);
    this.customerInfo$.subscribe((data) => {
      this.customerInfoRawData = data;
    });

    this.spinData$ = this.store.select(spinDataSelector);
    this.spinData$.subscribe((data) => {
      this.spinRawData = data;
    });
  }

  openDialogSignIn() {
    // authentication
    const dialogRef = this.dialog.open(SignInComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log(`success signin`);
    });
  }

  openRulesDialog() {
    const dialogRulesRef = this.dialog.open(RulesComponent);
    dialogRulesRef.afterClosed().subscribe(() => {
      console.log('close rules dialog');
    });
  }

  startSpin() {
    const isLoading = this.customerInfoRawData?.isLoading;
    const rawData = this.customerInfoRawData?.data;

    if (!isLoading && rawData) {
      // spin the wheel using message service
      console.log('spinning');
      this.messageService.changeMessage(1);
    } else {
      // authentication
      this.openDialogSignIn();
    }
  }

  get isShowRemainingTurns() {
    return this.customerInfoRawData?.data?.remainingTurns;
  }

  get getRemainingTurns() {
    const fromSpinApi =
      this.spinRawData?.isLoaded && this.spinRawData.data?.remainingTurns;
    const fromCustomerInfo = this.customerInfoRawData?.data?.remainingTurns;
    return fromSpinApi || fromCustomerInfo;
  }

  ngOnInit(): void {}
}
