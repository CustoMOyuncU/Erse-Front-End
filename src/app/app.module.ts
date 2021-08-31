import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {JwtModule} from "@auth0/angular-jwt"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { EnvironmentInformationComponent } from './components/environment-information/environment-information.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { HumanResourcesComponent } from './components/human-resources/human-resources.component';
import { ProductionComponent } from './components/production/production.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { MainComponent } from './components/main/main.component';
import { ClotheSliderComponent } from './components/clothe-slider/clothe-slider.component';
import { ColorComponent } from './components/admin-operations/color/color.component';

import { ToastrModule } from 'ngx-toastr';
import { BrandComponent } from './components/admin-operations/brand/brand.component';
import { CategoryComponent } from './components/admin-operations/category/category.component';
import { SideBarComponent } from './components/admin-operations/side-bar/side-bar.component';
import { ClotheComponent } from './components/admin-operations/clothe/clothe.component';
import { ClotheImageComponent } from './components/admin-operations/clothe-image/clothe-image.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';

export function tokenGetter(){
  return localStorage.getItem("token")
}

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AboutUsComponent,
    CompanyProfileComponent,
    EnvironmentInformationComponent,
    CertificateComponent,
    HumanResourcesComponent,
    ProductionComponent,
    ContactComponent,
    ShowroomComponent,
    MainComponent,
    ClotheSliderComponent,
    ColorComponent,
    BrandComponent,
    CategoryComponent,
    SideBarComponent,
    ClotheComponent,
    ClotheImageComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:4200","localhost:61794"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
