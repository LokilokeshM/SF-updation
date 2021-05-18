import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complain-request',
  templateUrl: './complain-request.component.html',
  styleUrls: ['./complain-request.component.css']
})
export class ComplainRequestComponent implements OnInit {
  [x: string]: any;
  
  constructor( private route:Router)  
 {}
  ngOnInit(): void {
  
  }

  textMethod(txt:any){
    console.log(txt)
   
     
     this.route.navigate(['complain-status']);
  }
}
