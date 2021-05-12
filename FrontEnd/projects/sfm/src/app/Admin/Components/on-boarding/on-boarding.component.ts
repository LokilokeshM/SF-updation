import { Component, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import Swal from 'sweetalert2';
import { Customer } from '../../../Common/Model/customer';
import { CustomerService } from '../../Service/customer.service';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent  {
  submit:boolean =false;
  mess:string ="";
  onBoarding = new FormGroup({
  firstname:new FormControl("",[Validators.required]),
  lastname:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required]),
  phonenumber: new FormControl("",[Validators.required]),
  nationality: new FormControl("",[Validators.required]),
  dob:new FormControl("",[Validators.required]),
  religion: new FormControl("",[Validators.required]),
  bloodGroup:new FormControl("",[Validators.required]),
  oldAddress:new FormGroup({
    doorno:new FormControl("",[Validators.required]),
    streetName:new FormControl("",[Validators.required]),  
    city:new FormControl("",[Validators.required]),
    state:new FormControl("",[Validators.required]),
    country:new FormControl("",[Validators.required]),
    pincode:new FormControl("",[Validators.required])
  }),
  houseid:new FormGroup({
    blockNo:new FormControl("",[Validators.required]),
    houseNo:new FormControl("",[Validators.required]),
    city:new FormControl("Chennai"),
    state:new FormControl("Tamil Nadu"),
    country:new FormControl("India"),
    pincode:new FormControl("600099")
  })
  });

  @ViewChild('staticTabs', { static: false })staticTabs!: TabsetComponent;

  constructor(private cust:CustomerService) { }

  ngOnInit(): void {

  }

  get f(){return this.onBoarding.controls}

  selectTab()
  {

  }
  onSubmit()
  {
    this.submit = true;
    this.mess="";
    if(this.onBoarding.invalid)
    {
      
      if(this.f.firstname.errors && this.submit){this.mess =this.mess + "Enter The First Name\n"}
      if(this.f.lastname.errors && this.submit){this.mess =this.mess + "Enter The Last Name\n"}
      if(this.f.email.errors && this.submit){this.mess =this.mess + "Enter The Email\n"}
      if(this.f.phonenumber.errors && this.submit){this.mess =this.mess + "Enter The PhoneNumber\n"}
      if(this.f.nationality.errors && this.submit){this.mess =this.mess + "Enter The Nationality\n"}
      if(this.f.dob.errors && this.submit){this.mess =this.mess + "Enter The Date of Birth\n"}
      if(this.f.religion.errors && this.submit){this.mess =this.mess + "Enter The Religion\n"}
      if(this.f.bloodGroup.errors && this.submit){this.mess =this.mess + "Enter The Blood Group\n"}
      if(this.f.oldAddress.errors && this.submit){this.mess =this.mess + "Enter The Valid Address\n"}
      if(this.f.houseid.errors && this.submit){this.mess =this.mess + "Enter The Street Name\n"}  
      Swal.fire(this.mess,"","error");
      return;
    }
    if(this.onBoarding.valid)
    { console.log(this.onBoarding.value);

       let c:Customer={
        "firstname": this.f.firstname.value,
        "lastname": "m",
        "email": this.f.email.value,
        "phonenumber": 9952017622,
        "nationality": "indian",
        "dob": "2021-04-15",
        "religion": "hindhu",
        "bloodGroup": "b+",
        "oldAddress": [
          {
            "doorno": "30/2",
            "streetName": "sdfsdafsdf",
            "city": "chennai",
            "state": "chennai",
            "country": "india",
            "pincode": 600099
          }
        ],
        "houseid": [{
          "blockNo": "B",
          "houseNo": "1",
          "city": "chennai",
          "state": "tamilnadu",
          "country": "india",
          "pincode": 600099
        }]
      }
      this.cust.saveOnboardingCustomer(c).subscribe(data=>Swal.fire("Success","","success"),
      (error)=>Swal.fire(error,"","error"))
    }
  }
}
