import { TestBed } from '@angular/core/testing';

import { TabOrderControllerService } from './tab-order-controller.service';

describe('TabOrderControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabOrderControllerService = TestBed.get(TabOrderControllerService);
    expect(service).toBeTruthy();
  });
});
