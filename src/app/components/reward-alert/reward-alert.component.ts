import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-reward-alert',
  templateUrl: './reward-alert.component.html',
  styleUrls: ['./reward-alert.component.scss'],
})
export class RewardAlertComponent implements OnInit {
  constructor(
    public dialog: MatDialog // @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  // congratulationString() {
  //   return `Xin chúc mừng Quý khách quay trúng ${this.data}`;
  // }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
