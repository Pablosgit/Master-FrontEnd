import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/page/home/home.component';
import { LoginComponent } from './components/page/login/login.component';
import { AboutComponent } from './components/page/about/about.component';
import { DashboardComponent } from './components/page/dashboard/dashboard.component';
import { GaleryComponent } from './components/page/galery/galery.component';
import { CrudComponent } from './components/page/crud/crud.component';
import { ProfileComponent } from './components/page/profile/profile.component';
import { MenuPublicComponent } from './components/layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './components/layout/menu-private/menu-private.component';
import { HeaderPublicComponent } from './components/layout/header-public/header-public.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { RotateDirective } from './directives/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GaleryComponent,
    CrudComponent,
    ProfileComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    HeaderPublicComponent,
    FooterComponent,
    RotateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
