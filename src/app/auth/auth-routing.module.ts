import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
