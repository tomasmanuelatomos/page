import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LoginComponent } from "./page/login/login.component";
import { RegisterComponent } from "./page/register/register.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../share/share.module";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth.routing.module";
import { CommonModule } from "@angular/common";
import { ResetPasswordComponent } from "./page/reset-password/reset-password.component";



@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent
    ],
    imports: [
      AuthRoutingModule,
      SharedModule,
      CommonModule,
    ],
    providers: [],
    exports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class AuthModule { }
  