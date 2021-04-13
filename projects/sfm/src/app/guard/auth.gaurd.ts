 
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private _router:Router ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean { 
                    console.log("Auth is working")
        return true;
    }
}
