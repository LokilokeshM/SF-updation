import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complain-status',
  templateUrl: './complain-status.component.html',
  styleUrls: ['./complain-status.component.css']
})
export class ComplainStatusComponent  {
  sub: string="Electrical";
  msg:string="Power supply is not in proper condition";
  days:any="05";
  others:any;

  constructor(){
   
}
  ngOnInit(): void {
   // throw new Error('Oops!! An Error Occured!');
  }

   
}