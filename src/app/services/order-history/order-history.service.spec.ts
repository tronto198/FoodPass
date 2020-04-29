import { TestBed } from '@angular/core/testing';

import { OrderHistoryService } from './order-history.service';

describe('OrderHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderHistoryService = TestBed.get(OrderHistoryService);
    expect(service).toBeTruthy();
  });
});
