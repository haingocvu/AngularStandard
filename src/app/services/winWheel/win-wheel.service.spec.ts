import { TestBed } from '@angular/core/testing';

import { WinWheelService } from './win-wheel.service';

describe('WinWheelService', () => {
  let service: WinWheelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinWheelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
