import { TestBed } from '@angular/core/testing';

import { CustomerRewardService } from './customer-reward.service';

describe('CustomerRewardService', () => {
  let service: CustomerRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
