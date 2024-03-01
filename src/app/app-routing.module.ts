import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/auth/page/login/login.component';

const routes: Routes = [
  {
    path: "",
    loadChildren : ()=>import("./module/auth/auth.module").then((r)=>r.AuthModule)
  },
  // {
  //   path: "#",
  //   loadChildren : ()=>import("./module/landing/landing.module").then((r)=>r.LandingModule)
  // }
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
