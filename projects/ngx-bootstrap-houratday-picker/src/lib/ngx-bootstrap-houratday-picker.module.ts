import { NgModule } from '@angular/core';
import { NgxBootstrapHouratdayPickerComponent } from './ngx-bootstrap-houratday-picker.component';
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    NgxBootstrapHouratdayPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    NgxBootstrapHouratdayPickerComponent,
  ]
})
export class NgxBootstrapHouratdayPickerModule { }
