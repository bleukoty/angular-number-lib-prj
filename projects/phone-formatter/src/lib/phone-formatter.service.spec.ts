import { TestBed } from '@angular/core/testing';

import { PhoneFormatterService } from './phone-formatter.service';

describe('PhoneFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneFormatterService = TestBed.get(PhoneFormatterService);
    expect(service).toBeTruthy();
  });
});
