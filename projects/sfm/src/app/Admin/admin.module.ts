import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OnBoardingComponent } from './Components/on-boarding/on-boarding.component';
import { ComplainRequestComponent } from './Components/complain-request/complain-request.component';
import { OwnerDetailsComponent } from './Components/owner-details/owner-details.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { VendorDetailsComponent } from './Components/vendor-details/vendor-details.component';
import { PaymentReportsComponent } from './Components/payment-reports/payment-reports.component';
import { ComplainReportsComponent } from './Components/complain-reports/complain-reports.component';
import { DefaultLayoutComponent } from './Components/default-layout/default-layout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OnBoardingComponent,
    ComplainRequestComponent,
    OwnerDetailsComponent,
    PaymentComponent,
    VendorDetailsComponent,
    PaymentReportsComponent,
    ComplainReportsComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
