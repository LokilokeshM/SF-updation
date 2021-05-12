import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'jquery';
import Swal from 'sweetalert2';
import { Complaint } from '../../../Common/Model/complaint';
import { Customer } from '../../../Common/Model/customer';
import { HouseDetails } from '../../../Common/Model/house-details';
import { ComplaintService } from '../../Service/complaint.service';
import { CustomerService } from '../../Service/customer.service';
declare var $:any;
@Component({
  selector: 'app-complain-request',
  templateUrl: './complain-request.component.html',
  styleUrls: ['./complain-request.component.css']
})
export class ComplainRequestComponent implements OnInit , AfterViewInit{

  Customer:any;
  mess:number = 0;
  @ViewChild('dataTable',{static:false}) table: any;
   
  complaint:Complaint[] =[];
  dataTable:any;
  c:Customer[]=[];
  constructor(private complaintService:ComplaintService,private customerService:CustomerService) { }
  
  
  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(); 
  }

  ngOnInit(): void {
    this.complaintService.getComplain().subscribe(
    (data)=>{this.complaint = data},
    (error)=>this.mess = 1
    )
  }

  view(id:any){
    this.customerService.getCustomer(id).subscribe((data)=>
      {
        this.Customer=[];
        this.Customer = data;
        console.log(this.Customer)
      },
      (errro)=>Swal.fire(errro,"Error","error")
    )
  }
  status(id:number,st:string)
  {
    let s:any = {
      "id":id,
      "st":st
    }
    this.complaintService.setStatus(id,st).subscribe((data)=>console.log("sdfa"))
    Swal.fire("Your Change successfully","","success")
  }
}
