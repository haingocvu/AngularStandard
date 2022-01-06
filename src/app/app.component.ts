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
import { MessageService } from '@app/services/message/message.service';
import { RewardAlertComponent } from '@app/components/reward-alert/reward-alert.component';

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
  ngAfterViewInit(): void {
    // this.messageService.currentMessage.subscribe((values) => {
    //   const { messageType, messageText } = values;
    //   switch (messageType) {
    //     case 2:
    //       this.showSpinResultDialog(messageText);
    //       break;
    //     default:
    //       break;
    //   }
    // });
  }

  // showSpinResultDialog(messageText: string) {
  //   const spinResultDialogRef = this.dialog.open(RewardAlertComponent, {
  //     data: messageText,
  //   });

  //   spinResultDialogRef.afterClosed().subscribe(() => {
  //     console.log('close spin result dialog');
  //   });
  // }

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
