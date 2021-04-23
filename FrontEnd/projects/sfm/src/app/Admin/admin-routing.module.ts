import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainRequestComponent } from './Components/complain-request/complain-request.component';
import { AddEventsComponent } from './Components/add-events/add-events.component';
import { ComplainReportsComponent } from './Components/complain-reports/complain-reports.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './Components/default-layout/default-layout.component';
import { EventHistoryComponent } from './Components/event-history/event-history.component';
import { OnBoardingComponent } from './Components/on-boarding/on-boarding.component';
import { OwnerDetailsComponent } from './Components/owner-details/owner-details.component';
import { VendorDetailsComponent } from './Components/vendor-details/vendor-details.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AddVendorComponent } from './Components/add-vendor/add-vendor.component';

const routes: Routes = [{
  path: '',
  component: DefaultLayoutComponent,
  children:[
    {
      path:'Dashboard',
      component:DashboardComponent
    },
    {
      path:'ComplainReport',
      component:ComplainReportsComponent
    },
    {
      path:'ComplainRequest',
      component:ComplainRequestComponent
    },
    {
      path:'OnBoarding',
      component:OnBoardingComponent
    },
    {
      path:'OwnerDetails',
      component:OwnerDetailsComponent
    },
    {
      path:'PaymentDetails',
      component:PaymentComponent
    },
    {
      path:'VendorDetails',
      component:VendorDetailsComponent
    },
    {
      path:'AddEvent',
      component:AddEventsComponent
    },
    {
      path:'EventHistory',
      component:EventHistoryComponent
    },
    {
      path:'AddVendor',
      component:AddVendorComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
