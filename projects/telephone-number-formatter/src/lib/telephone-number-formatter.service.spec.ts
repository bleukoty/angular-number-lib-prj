import { TestBed } from '@angular/core/testing';

import { TelephoneNumberFormatterService } from './telephone-number-formatter.service';

describe('TelephoneNumberFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelephoneNumberFormatterService = TestBed.get(TelephoneNumberFormatterService);
    expect(service).toBeTruthy();
  });
});
