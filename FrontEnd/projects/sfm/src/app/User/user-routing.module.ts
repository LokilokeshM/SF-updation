import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainRequestComponent } from './Components/complain-request/complain-request.component';
import { ComplainStatusComponent } from './Components/complain-status/complain-status.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './Components/default-layout/default-layout.component';
import { ViewEventComponent } from './Components/view-event/view-event.component';
import { ViewProfileComponent } from './Components/view-profile/view-profile.component';
import {PaymentDetailsComponent} from './Components/payment-details/payment-details.component'
const routes: Routes = [
 {
  path: '',
  component: DefaultLayoutComponent,
  children:[
    {
      path:'Dashboard',
      component:DashboardComponent,
    },
    {
      path:'ComplainRequest',
      component:ComplainRequestComponent
    },
    {
      path:'ComplainStatus',
      component:ComplainStatusComponent
    },
    {
      path:'ViewProfile',
      component:ViewProfileComponent
    },
    {
      path:'Event',
      component:ViewEventComponent
    },
    {
      path:'PaymentDetails',
      component:PaymentDetailsComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
