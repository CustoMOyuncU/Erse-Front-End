import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private jwtHelper:JwtHelperService,private router:Router,private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var role =this.jwtHelper.decodeToken(localStorage.getItem('token'))[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        console.log(role)
        if(role=="admin"){   
          return true
        }else{
          this.toastr.error("Yetersiz yetki","Erişim reddedildi")
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate([""]));
          return false
        }
  }


  getUserIdByJwt() {
    
    
    }
  
  
}
