import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './Components/default-layout/default-layout.component';
import { ComplainRequestComponent } from './Components/complain-request/complain-request.component';
import { ComplainStatusComponent } from './Components/complain-status/complain-status.component';
import { ViewProfileComponent } from './Components/view-profile/view-profile.component';
import { ViewEventComponent } from './Components/view-event/view-event.component';
import { PaymentDetailsComponent } from './Components/payment-details/payment-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DefaultLayoutComponent,
    ComplainRequestComponent,
    ComplainStatusComponent,
    ViewProfileComponent,
    ViewEventComponent,
    PaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
