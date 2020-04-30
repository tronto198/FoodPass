import { TestBed } from '@angular/core/testing';

import { WaitingOrderControllerService } from './waiting-order-controller.service';

describe('WaitingOrderControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaitingOrderControllerService = TestBed.get(WaitingOrderControllerService);
    expect(service).toBeTruthy();
  });
});
