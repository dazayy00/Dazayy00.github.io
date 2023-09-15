import { TestBed } from '@angular/core/testing';

import { WorkService } from './work.service';

describe('WorkService', () => {
  let service: WorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkService);
  });

  Xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
