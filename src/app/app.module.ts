import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { WindowComponent } from './window.component';

@NgModule({
  imports:      [ BrowserModule, PortalModule],
  declarations: [ AppComponent, WindowComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
