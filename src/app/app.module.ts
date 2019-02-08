import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BsNgxHouratdayPickerModule} from "../../projects/bs-ngx-houratday-picker/src/lib/bs-ngx-houratday-picker.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsNgxHouratdayPickerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
