import { TestBed } from '@angular/core/testing';

import { NgxBootstrapHouratdayPickerService } from './ngx-bootstrap-houratday-picker.service';

describe('NgxBootstrapHouratdayPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBootstrapHouratdayPickerService = TestBed.get(NgxBootstrapHouratdayPickerService);
    expect(service).toBeTruthy();
  });
});
