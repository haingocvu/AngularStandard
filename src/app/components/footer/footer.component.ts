import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { IStoreState } from '@app/interfaces/store.interface';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { Observable } from 'rxjs';

import { SignInComponent } from '@app/components/sign-in/sign-in.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  winWheelData$: Observable<IGenericReducerState<IWinWheel>>;
  winWheelRawData: IGenericReducerState<IWinWheel> | null = null;

  constructor(private store: Store<IStoreState>, public dialog: MatDialog) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      this.winWheelRawData = data;
    });
  }

  openDialogSignIn() {
    const dialogRef = this.dialog.open(SignInComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`success signin`);
    });
  }

  ngOnInit(): void {}
}
