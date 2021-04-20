import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './components/flex/flex.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: "", pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'flex', component: FlexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
