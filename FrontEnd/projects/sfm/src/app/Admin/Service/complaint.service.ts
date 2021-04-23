import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GlobalConstants from '../../Common/global-constants';
import { Complaint } from '../../Common/Model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  public getComplain():Observable<Complaint[]>
  {
    return this.http.get<Complaint[]>(GlobalConstants.apiURLAdmin + "complaint/all");
  }
  public getComplainById(id:number):Observable<Complaint>
  {
    return this.http.get<Complaint>(GlobalConstants.apiURLAdmin + "complaint/"+id)
  }

  public setStatus(id:any,status:any)
  {
    let s:any={
      "id":id,
      "status":status
    }
    return this.http.post(GlobalConstants.apiURLAdmin+ "customer/status",s);
  }
}
