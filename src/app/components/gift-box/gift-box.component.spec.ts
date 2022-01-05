import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftBoxComponent } from './gift-box.component';

describe('GiftBoxComponent', () => {
  let component: GiftBoxComponent;
  let fixture: ComponentFixture<GiftBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
