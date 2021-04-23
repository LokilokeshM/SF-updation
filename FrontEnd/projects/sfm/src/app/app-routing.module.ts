import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Common/Components/login/login.component';
import { LogoutComponent } from './Common/Components/logout/logout.component';
import { PageNotFoundComponent } from './Common/Components/page-not-found/page-not-found.component';
import { AuthGuardService } from './guard/auth.gaurd';

const routes: Routes = [ 
  {
    path:'login',
    component:LoginComponent,
  },
  {   
    path: 'User',
    loadChildren: () => import('./User/user.module').then(m => m.UserModule),
    canActivate : [AuthGuardService]
  },
  {
    path: 'Admin',
    loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule),
    canActivate : [AuthGuardService]
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
