import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStoreState } from '@app/interfaces/store.interface';
import { campaignNameSelector } from '@app/store/selectors/win-wheel.selector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  campaignName: string | undefined = '';
  constructor(private store: Store<IStoreState>) {
    this.store.select(campaignNameSelector).subscribe((value) => {
      this.campaignName = value;
    });
  }

  ngOnInit(): void {}
}
