import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const authRoutes: Routes = [
  {path: 'signup' , component: SignupComponent},
  {path: 'signin' , component: SigninComponent},
];

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(authRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {}
