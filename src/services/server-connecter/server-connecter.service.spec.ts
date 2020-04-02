import { TestBed } from '@angular/core/testing';

import { ServerConnecterService } from './server-connecter.service';

describe('ServerConnecterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerConnecterService = TestBed.get(ServerConnecterService);
    expect(service).toBeTruthy();
  });
});
