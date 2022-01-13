import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { IStoreState } from '@app/interfaces/store.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ICustomerReward } from '@app/interfaces/customer-reward.interface';
import { selectCustomerRewardData } from '@app/store/selectors/customer-reward.selector';
import {
  getCustomerRewardList,
  getCustomerRewardListStart,
} from '@app/store/actions/customer-reward.actions';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  cusRewardData$: Observable<IGenericReducerState<Array<ICustomerReward>>>;
  cusRewardRawData: IGenericReducerState<Array<ICustomerReward>> | null = null;

  constructor(
    private store: Store<IStoreState>,
    private spinner: NgxSpinnerService
  ) {
    this.cusRewardData$ = this.store.select(selectCustomerRewardData);
    this.cusRewardData$.subscribe((data) => {
      this.cusRewardRawData = data;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.store.dispatch(
      getCustomerRewardList({
        pageSize: 10,
        pageNum: 0,
        query: '',
        sort: 'asc',
      })
    );
  }
}
