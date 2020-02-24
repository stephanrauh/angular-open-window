import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WindowComponent } from "./window.component";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [AppComponent, WindowComponent],
  imports: [BrowserModule, PortalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
