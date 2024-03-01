import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../share/share.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LandingRoutingModule } from "./landing.routing.module";
import { HomeComponent } from "./pages/home/home.component";



@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      LandingRoutingModule,
      SharedModule,
      CommonModule,
    ],
    providers: [],
    exports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class LandingModule { }
  