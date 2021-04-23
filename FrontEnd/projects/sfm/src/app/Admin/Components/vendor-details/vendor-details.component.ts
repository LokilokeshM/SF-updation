import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Vendor } from '../../../Common/Model/vendor';
import { VendorService } from '../../Service/vendor.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendor:Vendor[] =[];
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.vendorService.getVendorDetails().subscribe((data) =>
      this.vendor = data,
    (error)=>Swal.fire("Error",error,"error")
    );
  }

}
