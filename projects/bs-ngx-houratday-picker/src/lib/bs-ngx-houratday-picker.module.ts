import { NgModule } from '@angular/core';
import { BsNgxHouratdayPickerComponent } from './bs-ngx-houratday-picker.component';
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BsNgxHouratdayPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    BsNgxHouratdayPickerComponent,
  ]
})
export class BsNgxHouratdayPickerModule { }
