import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GlobalConstants from '../../Common/global-constants';
import { Customer } from '../../Common/Model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http:HttpClient) { }

  public saveOnboardingCustomer(c:Customer):Observable<Customer>
  {
    return this.http.post<Customer>(GlobalConstants.apiURLAdmin + "customer/save" ,c);
  }
  public getAllCustomer():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(GlobalConstants.apiURLAdmin +"customer/all");
  }
  public getCustomer(id:any):Observable<Customer[]>
  {
    return this.http.get<Customer[]>(GlobalConstants.apiURLAdmin + "customer/"+id);
  }

  public postStatus(id:any,status:any)
  {
   
  }
}
