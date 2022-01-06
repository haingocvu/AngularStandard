import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { campaignNameSelector } from '@app/store/selectors/win-wheel.selector';
import { MatDialog } from '@angular/material/dialog';

import { GiftBoxComponent } from '@app/components/gift-box/gift-box.component';
import { hasEnterCodeSuccessSelector } from '@app/store/selectors/customerInfo.selector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  campaignName: string | undefined = '';
  showGiftBox: boolean = false;
  constructor(public dialog: MatDialog, private store: Store<IStoreState>) {
    this.store.select(campaignNameSelector).subscribe((value) => {
      this.campaignName = value;
    });
    this.store.select(hasEnterCodeSuccessSelector).subscribe((isSuccess) => {
      this.showGiftBox = isSuccess;
    });
  }

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(GiftBoxComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log(`success close gift box`);
    });
  }
}
