import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainRequestComponent } from '../User/Components/complain-request/complain-request.component';
import { PaymentDetailsComponent } from '../User/Components/payment-details/payment-details.component';
import { ComplainReportsComponent } from './Components/complain-reports/complain-reports.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './Components/default-layout/default-layout.component';
import { OnBoardingComponent } from './Components/on-boarding/on-boarding.component';
import { OwnerDetailsComponent } from './Components/owner-details/owner-details.component';
import { VendorDetailsComponent } from './Components/vendor-details/vendor-details.component';

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
      component:PaymentDetailsComponent
    },
    {
      path:'VendorDetails',
      component:VendorDetailsComponent
    },
    {
      path:'AddEvent',
      component:VendorDetailsComponent
    },
    {
      path:'EventHistory',
      component:VendorDetailsComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
