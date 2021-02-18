import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccountRoutes } from "./account.routing";
import { CommonModule } from "@angular/common";
import { ForgotComponent } from "./forgot/forgot.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    LockscreenComponent
  ]
})
export class AccountModule {}
