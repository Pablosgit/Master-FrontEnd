import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/page/home/home.component';
import {LoginComponent} from './components/page/login/login.component';
import {AboutComponent} from './components/page/about/about.component';
import {DashboardComponent} from './components/page/dashboard/dashboard.component';
import {GaleryComponent} from './components/page/galery/galery.component';
import {CrudComponent} from './components/page/crud/crud.component';
import {ProfileComponent} from './components/page/profile/profile.component'

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "galery", component: GaleryComponent },
  { path: "crud", component: CrudComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
