import { TestBed } from '@angular/core/testing';

import { DataControllerService } from './data-controller.service';

describe('DataControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataControllerService = TestBed.get(DataControllerService);
    expect(service).toBeTruthy();
  });
});
