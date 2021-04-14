import { TestBed } from '@angular/core/testing';

import { AutoStateService } from './auto-state.service';

describe('AutoStateService', () => {
  let service: AutoStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
