import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { ShowDeviceComponent } from './device/show-device/show-device.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InfoDeviceComponent } from './device/info-device/info-device.component';
@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    ShowDeviceComponent,
    InfoDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
