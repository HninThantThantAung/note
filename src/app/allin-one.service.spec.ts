import { TestBed } from '@angular/core/testing';

import { AllinOneService } from './allin-one.service';

describe('AllinOneService', () => {
  let service: AllinOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllinOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
