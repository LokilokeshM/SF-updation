import {NgModule} from '@angular/core';
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
import { AddEventsComponent } from './Components/add-events/add-events.component';
import { EventHistoryComponent } from './Components/event-history/event-history.component';
import { DemoMaterialModule } from '../Common/material.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AddVendorComponent } from './Components/add-vendor/add-vendor.component';

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
    AddEventsComponent,
    EventHistoryComponent,
    AddVendorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoMaterialModule,
    TabsModule.forRoot(),
    HttpClientModule
  ]
})
export class AdminModule { }
