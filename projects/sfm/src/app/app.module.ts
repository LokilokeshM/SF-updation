import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Common/Components/page-not-found/page-not-found.component';
import { LoginComponent } from './Common/Components/login/login.component';
import { LogoutComponent } from './Common/Components/logout/logout.component';
import { AuthGuardService } from './guard/auth.gaurd';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
