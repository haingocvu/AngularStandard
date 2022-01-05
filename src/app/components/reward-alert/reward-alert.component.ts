import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reward-alert',
  templateUrl: './reward-alert.component.html',
  styleUrls: ['./reward-alert.component.scss'],
})
export class RewardAlertComponent implements OnInit {
  dataString: string = '';
  constructor(
    public dialogRef: MatDialogRef<RewardAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.dataString = data;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  get congratulationString() {
    return `Xin chúc mừng Quý khách quay trúng ${this.dataString}`;
  }

  closeDialog(): void {
    console.log(this.dialogRef);
    setTimeout(() => {
      this.dialogRef.close();
    }, 0);
  }
}
