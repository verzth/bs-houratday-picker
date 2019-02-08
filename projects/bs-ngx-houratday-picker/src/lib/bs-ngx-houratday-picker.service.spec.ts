import { TestBed } from '@angular/core/testing';

import { BsNgxHouratdayPickerService } from './bs-ngx-houratday-picker.service';

describe('BsNgxHouratdayPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BsNgxHouratdayPickerService = TestBed.get(BsNgxHouratdayPickerService);
    expect(service).toBeTruthy();
  });
});
