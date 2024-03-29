import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GlobalConstants from '../../Common/global-constants';
import { Vendor } from '../../Common/Model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }

  public getVendorDetails():Observable<Vendor[]>
  {
    return this.http.get<Vendor[]>(GlobalConstants.apiURLAdmin + "vendor/all");
  }

  public addVendorDetails(v:Vendor):Observable<Vendor>
  {
    return this.http.post<Vendor>(GlobalConstants.apiURLAdmin + "vendor/save",v);
  }

  public getVendorById(id:any):Observable<Vendor>
  {
    return this.http.get<Vendor>(GlobalConstants.apiURLAdmin + "vendor/"+id);
  }
}
