import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardAlertComponent } from './reward-alert.component';

describe('RewardAlertComponent', () => {
  let component: RewardAlertComponent;
  let fixture: ComponentFixture<RewardAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
