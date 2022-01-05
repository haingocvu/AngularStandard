import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { campaignNameSelector } from '@app/store/selectors/win-wheel.selector';
import { MatDialog } from '@angular/material/dialog';

import { GiftBoxComponent } from '@app/components/gift-box/gift-box.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  campaignName: string | undefined = '';
  constructor(public dialog: MatDialog, private store: Store<IStoreState>) {
    this.store.select(campaignNameSelector).subscribe((value) => {
      this.campaignName = value;
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
