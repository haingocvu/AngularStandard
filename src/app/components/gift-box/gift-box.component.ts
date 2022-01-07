import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

import { IStoreState } from '@app/interfaces/store.interface';
import { giftBoxSelector } from '@app/store/selectors/spin.selector';

@Component({
  selector: 'app-gift-box',
  templateUrl: './gift-box.component.html',
  styleUrls: ['./gift-box.component.scss'],
})
export class GiftBoxComponent implements OnInit {
  @Input()
  self!: SwalComponent;
  giftBox: Array<string> | undefined = [];
  constructor(
    private store: Store<IStoreState>,
    public readonly swalTargets: SwalPortalTargets
  ) {
    this.store.select(giftBoxSelector).subscribe((data) => {
      this.giftBox = data;
      console.log(this.giftBox);
    });
  }

  closeModal() {
    this.self.close();
  }

  ngOnInit(): void {}
}
