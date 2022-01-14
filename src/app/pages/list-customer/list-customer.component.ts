import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, merge, Subject } from 'rxjs';
import { debounceTime, startWith } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { IStoreState } from '@app/interfaces/store.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { ICustomerReward } from '@app/interfaces/customer-reward.interface';
import { selectCustomerRewardData } from '@app/store/selectors/customer-reward.selector';
import {
  getCustomerRewardList,
  getCustomerRewardListStart,
} from '@app/store/actions/customer-reward.actions';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  cusRewardData$: Observable<IGenericReducerState<Array<ICustomerReward>>>;
  query$ = new Subject<string>();
  queryString = '';
  cusRewardRawData: IGenericReducerState<Array<ICustomerReward>> | null = null;
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'rewardCode',
    'reward',
    'archiveAt',
  ];

  constructor(
    private store: Store<IStoreState>,
    private spinner: NgxSpinnerService
  ) {
    this.cusRewardData$ = this.store.select(selectCustomerRewardData);
    this.cusRewardData$.subscribe((data) => {
      this.cusRewardRawData = data;
    });
  }
  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.query$.subscribe((value) => {
      this.paginator.pageIndex = 0;
      this.queryString = value;
    });
    merge(
      this.sort.sortChange,
      this.paginator.page,
      this.query$.pipe(debounceTime(200))
    )
      .pipe(startWith({}))
      .subscribe(() => {
        this.store.dispatch(
          getCustomerRewardList({
            pageNum: this.paginator.pageIndex,
            pageSize: this.paginator.pageSize,
            query: this.queryString,
            sortActive: this.sort.active,
            sortDirection: this.sort.direction,
          })
        );
      });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner.show();
    this.store.dispatch(getCustomerRewardListStart());
    this.store.dispatch(
      getCustomerRewardList({
        pageSize: 10,
        pageNum: 0,
        query: '',
        sortActive: 'name',
        sortDirection: 'desc',
      })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.query$.next(filterValue);
  }

  get resultsLength() {
    // update total records here
    return 100;
  }
}
