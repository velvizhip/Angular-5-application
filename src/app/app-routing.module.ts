import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: []
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
