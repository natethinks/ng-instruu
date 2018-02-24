import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService, AuthenticationService } from './_services/index';

import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      ROUTES
        //{ enableTracing: true }, just for dev
        //{ provide: LocationStrategy, useClass: PathLocationStrategy}
    )
  ],
    providers: [
      UserService,
      AuthenticationService,
        HttpClientModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
