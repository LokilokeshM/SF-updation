import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CustomerService } from '../../../Admin/Service/customer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  customer:any;
  constructor(private cService:CustomerService) { }

  ngOnInit(): void {

    this.cService.getCustomer(1).subscribe((data)=>
    {
      this.customer = data;
    },
    (error)=>{Swal.fire(error,"","error")})
  }

}
