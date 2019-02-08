import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsNgxHouratdayPickerComponent } from './bs-ngx-houratday-picker.component';

describe('BsNgxHouratdayPickerComponent', () => {
  let component: BsNgxHouratdayPickerComponent;
  let fixture: ComponentFixture<BsNgxHouratdayPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsNgxHouratdayPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsNgxHouratdayPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
