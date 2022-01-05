import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';

import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { IStoreState } from '@app/interfaces/store.interface';
import {
  getCustomerInfo,
  getCustomerInfoStart,
} from '@app/store/actions/customerInfo.actions';

import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ICustomerInfo } from '@app/interfaces/customerInfo.interface';

import { customerInfoDataSelector } from '@app/store/selectors/customerInfo.selector';
import { saveLoginInfo } from '@app/store/actions/customerInfo.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  _frm;
  winWheelData$: Observable<IGenericReducerState<IWinWheel>>;
  customerInfo$: Observable<IGenericReducerState<ICustomerInfo>>;
  winWheelRawData: IGenericReducerState<IWinWheel> | null = null;
  constructor(
    private _fb: FormBuilder,
    private store: Store<IStoreState>,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      this.winWheelRawData = data;
    });

    this.customerInfo$ = this.store.select(customerInfoDataSelector);
    this.customerInfo$.subscribe((data) => {
      const { isLoading, isLoaded } = data;
      if (!isLoading && isLoaded) {
        this.spinner.hide();
        this.dialog.closeAll();
      }
    });

    this._frm = this._fb.group({
      phoneNumber: '',
      contractNumber: '',
    });
  }

  get phoneNumber() {
    return this._frm.get('phoneNumber');
  }

  get contractNumber() {
    return this._frm.get('contractNumber');
  }

  handleSubmit() {
    const { invalid, value } = this._frm;
    if (invalid) return;
    this.getData(value?.phoneNumber, value?.contractNumber);
  }

  ngOnInit(): void {}

  getData(phone?: any, contract?: any) {
    this.store.dispatch(getCustomerInfoStart());
    this.store.dispatch(
      saveLoginInfo({ phoneNumber: phone, contractNumber: contract })
    );
    this.store.dispatch(
      getCustomerInfo({
        campaignId: this.winWheelRawData?.data?.id,
        headerConfig: new HttpHeaders()
          .append('X-Auth-Code', contract)
          .append('X-Auth-Phone', phone),
      })
    );
    this.spinner.show();
  }
}
