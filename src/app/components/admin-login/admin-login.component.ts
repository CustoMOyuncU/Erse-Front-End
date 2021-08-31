import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from 'src/app/models/loginModel';
import { RegisterModel } from 'src/app/models/registerModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  apiUrl=environment.apiUrl
  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit(): void {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'register',
      registerModel
    );
  }

  getUserIdByJwt() {
    if (this.isAuthenticated()) {
      return this.jwtHelper.decodeToken(localStorage.getItem('token'))[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ];
    }
  }

  updateUser(user: User) {
    return this.httpClient.post(this.apiUrl + 'updateuser', user);
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
