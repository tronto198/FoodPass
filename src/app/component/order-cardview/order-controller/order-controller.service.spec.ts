import { TestBed } from '@angular/core/testing';

import { OrderControllerService } from './order-controller.service';

describe('OrderControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderControllerService = TestBed.get(OrderControllerService);
    expect(service).toBeTruthy();
  });
});
