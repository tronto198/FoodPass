import { TestBed } from '@angular/core/testing';

import { TabHomeControllerService } from './tab-home-controller.service';

describe('TabHomeControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabHomeControllerService = TestBed.get(TabHomeControllerService);
    expect(service).toBeTruthy();
  });
});
