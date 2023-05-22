import { TestBed } from '@angular/core/testing';

import { FifaserviceService } from './fifaservice.service';

describe('FifaserviceService', () => {
  let service: FifaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
