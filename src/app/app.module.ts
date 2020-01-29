import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxBootstrapHouratdayPickerModule} from "../../projects/ngx-bootstrap-houratday-picker/src/lib/ngx-bootstrap-houratday-picker.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapHouratdayPickerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
