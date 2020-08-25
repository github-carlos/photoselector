import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home',canActivate: [LoginGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule),  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
