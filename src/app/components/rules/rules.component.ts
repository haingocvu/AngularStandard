import { Component, Input, OnInit } from '@angular/core';
import { IStoreState } from '@app/interfaces/store.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { winWheelRulesSelector } from '@app/store/selectors/win-wheel.selector';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  @Input()
  self!: SwalComponent;
  constructor(private store: Store<IStoreState>) {
    this.rules$.subscribe((rules) => {
      this.ruleRawData = rules;
    });
  }
  rules$: Observable<string | undefined> = this.store.select(
    winWheelRulesSelector
  );

  ruleRawData: string | undefined = '';

  closeDialog() {
    this.self.close();
  }

  ngOnInit(): void {}
}
