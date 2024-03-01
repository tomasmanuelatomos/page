import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./page/login/login.component";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./page/register/register.component";
import { ResetPasswordComponent } from "./page/reset-password/reset-password.component";




const routes: Routes = [
    {
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "reset",
        component: ResetPasswordComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }
  