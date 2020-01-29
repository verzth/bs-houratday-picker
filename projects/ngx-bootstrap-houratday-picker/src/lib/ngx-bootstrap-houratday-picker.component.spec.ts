import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapHouratdayPickerComponent } from './ngx-bootstrap-houratday-picker.component';

describe('NgxBootstrapHouratdayPickerComponent', () => {
  let component: NgxBootstrapHouratdayPickerComponent;
  let fixture: ComponentFixture<NgxBootstrapHouratdayPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapHouratdayPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapHouratdayPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
