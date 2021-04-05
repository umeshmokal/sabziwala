import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/header',
    pathMatch : 'full'
  },
  {
    path : 'header',
    component : HeaderComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: 'categories',
    component: NavigateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
