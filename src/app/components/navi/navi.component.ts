import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  user:User
  userId:number
  dataLoaded:boolean =false
  authenticated:boolean=false
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.userId=this.authService.getUserIdByJwt()
      this.getUser(this.userId)
      
    }else{
      this.dataLoaded=true
    }
  }

  getUser(userId: number) {
    this.userService.getUserById(userId).subscribe((response) => {
      this.user = response.data;
      this.dataLoaded = true;
      this.authenticated = true;
    });
  }

  deleteToken() {
    localStorage.removeItem('token');
    if (this.authService.isAuthenticated) {
      this.toastrService.info('Çıkış yapıldı', 'Sistem');
      this.router.navigate(["/home"])
    }
  }
}
