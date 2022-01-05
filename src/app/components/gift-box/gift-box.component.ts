import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IStoreState } from '@app/interfaces/store.interface';
import { giftBoxSelector } from '@app/store/selectors/spin.selector';

@Component({
  selector: 'app-gift-box',
  templateUrl: './gift-box.component.html',
  styleUrls: ['./gift-box.component.scss'],
})
export class GiftBoxComponent implements OnInit {
  giftBox: Array<string> | undefined = [];
  constructor(private store: Store<IStoreState>) {
    this.store.select(giftBoxSelector).subscribe((data) => {
      debugger;
      this.giftBox = data;
      console.log(this.giftBox);
    });
  }

  ngOnInit(): void {}
}
