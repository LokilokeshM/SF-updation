import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Customer } from '../../../Common/Model/customer';
import { CustomerService } from '../../Service/customer.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  customer:Customer[] = [];
  cust:any;
  p:number=1;
  constructor(private custservice:CustomerService) { }

  ngOnInit(): void {
    this.custservice.getAllCustomer().subscribe((data) =>{
      this.customer = data;
      console.log(data);
    }
    ,
    (error)=>Swal.fire("Error",error,"error")
    )
  }

  view(id:any){
    this.custservice.getCustomer(id).subscribe((data)=>
      {
        this.cust=[];
        this.cust = data;
        console.log(this.cust)
      },
      (errro)=>Swal.fire(errro,"Error","error")
    )
  }
  edit(id:any)
  {
    console.log(id);
  }
  status(id:any)
  {

  }
}
