import { Component, OnInit } from '@angular/core';
import { IStoreState } from '@app/interfaces/store.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { winWheelRulesSelector } from '@app/store/selectors/win-wheel.selector';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  constructor(private store: Store<IStoreState>) {
    this.rules$.subscribe((rules) => {
      this.ruleRawData = rules;
    });
  }
  rules$: Observable<string | undefined> = this.store.select(
    winWheelRulesSelector
  );

  ruleRawData: string | undefined = '';

  ngOnInit(): void {}
}
