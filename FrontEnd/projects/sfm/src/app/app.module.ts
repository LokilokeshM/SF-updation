import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Common/Components/page-not-found/page-not-found.component';
import { LoginComponent } from './Common/Components/login/login.component';
import { LogoutComponent } from './Common/Components/logout/logout.component';
import { AuthGuardService } from './guard/auth.gaurd';
import { DemoMaterialModule } from './Common/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { JwtInterceptor } from './guard/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  providers: [AuthGuardService,
    {provide : HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
