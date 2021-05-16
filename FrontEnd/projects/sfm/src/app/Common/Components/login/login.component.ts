import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../guard/auth';
import { AuthService } from '../../../guard/auth.service';
import { Authresponse } from '../../../guard/authresponse';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username:string ="" ;
  // password:string ="" ;
  auth:Auth | undefined;

  constructor(private AServie:AuthService,private router:Router) { }

  doLogin(username:string ,password:string){
    console.log(username + "," + password);
    this.auth = new Auth(username,password);
    this.AServie.doAuth(this.auth).
          subscribe((res: Authresponse) => {
            console.log("===========" + res.token);
            console.log("===========" + res.roles );
            // "token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2tpaSIsImV4cCI6MTYyMTA1NDM1NiwiaWF0IjoxNjIxMDU0MzQ2fQ.fuu9HkTU9UMMAMKbV2TF6BEg_BmF-QZx1lX3PipKcYqLnvMaAeO14vf8J1kXNRif55Dxq1l4k-SHvr457YztyA","roles":["admin"]
            sessionStorage.setItem("token",res.token);
            sessionStorage.setItem("roles",res.roles.toString());
            this.router.navigate(['/Admin/']);
          },
          err => {
            console.error("Error in Observable==" + JSON.stringify(err));
          },
          () => console.log("Processing Complte.")
    );

    
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }
}
