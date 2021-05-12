import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import Swal from 'sweetalert2';
import { VendorService } from '../../Service/vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  submit:boolean = false;
  addVendor:FormGroup = new FormGroup({
    vendorName:new FormControl("",[Validators.required]),  
    dob:new FormControl("",[Validators.required]),
    phoneNumber:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    companyName:new FormControl("",[Validators.required]),
	  occupation:new FormControl("",[Validators.required]),
	  specification:new FormControl("",[Validators.required]),
    companyAddrress:new FormGroup({
      doorno:new FormControl("",[Validators.required]),
      streetName:new FormControl("",[Validators.required]),
      city:new FormControl("",[Validators.required]),
      state:new FormControl("",[Validators.required]),
      country:new FormControl("",[Validators.required]),
      pincode:new FormControl("",[Validators.required]),
    }),
	  status:new FormControl("N"),
  })
mess:string ="";

  @ViewChild('staticTabs', { static: false })staticTabs!: TabsetComponent;
  constructor(private vService:VendorService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.addVendor.controls;
  }
  onSubmit()
  {
    this.submit = true;
    this.mess ="";
    if(this.addVendor.invalid)
    {
      if(this.f.vendorName.errors && this.submit){this.mess = this.mess + "Enter the Vendor Name\n"}
      if(this.f.dob.errors && this.submit){this.mess = this.mess + "Enter the Date of Birth\n"}
      if(this.f.phoneNumber.errors && this.submit){this.mess = this.mess + "Enter the Phone Number\n"}
      if(this.f.email.errors && this.submit){this.mess = this.mess + "Enter the Email\n"}
      if(this.f.companyName.errors && this.submit){this.mess = this.mess + "Enter the Company Name\n"}
	    if(this.f.occupation.errors && this.submit){this.mess = this.mess + "Enter the Occupation\n"}
	    if(this.f.specification.errors && this.submit){this.mess = this.mess + "Enter the Specification\n"}
      if(this.f.companyAddrress.errors && this.submit){this.mess = this.mess + "Enter the Company Address\n"}
      Swal.fire(this.mess ,"","error");
      return;
    }
    if(this.addVendor.valid)
    {
      this.vService.addVendorDetails(this.addVendor.value).subscribe((data)=>{
        Swal.fire("Success","","success")
      },(error)=>{
        Swal.fire(error,"","error")
      })
    }
  }
}
