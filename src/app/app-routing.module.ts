import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { BrandComponent } from './components/admin-operations/brand/brand.component';
import { CategoryComponent } from './components/admin-operations/category/category.component';
import { ClotheImageComponent } from './components/admin-operations/clothe-image/clothe-image.component';
import { ClotheComponent } from './components/admin-operations/clothe/clothe.component';
import { ColorComponent } from './components/admin-operations/color/color.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { EnvironmentInformationComponent } from './components/environment-information/environment-information.component';
import { HumanResourcesComponent } from './components/human-resources/human-resources.component';
import { MainComponent } from './components/main/main.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductionComponent } from './components/production/production.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:MainComponent},
  {path:"home",component:MainComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"company-profile",component:CompanyProfileComponent},
  {path:"environment-information",component:EnvironmentInformationComponent},
  {path:"certificate",component:CertificateComponent},
  {path:"human-resources",component:HumanResourcesComponent},
  {path:"production",component:ProductionComponent},
  {path:"contact",component:ContactComponent},
  {path:"showroom",component:ShowroomComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-register",component:AdminRegisterComponent},
  {path:"admin/brand",component:BrandComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"admin/color",component:ColorComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"admin/categories",component:CategoryComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"admin/clothe",component:ClotheComponent},
  {path:"admin/clothe-image",component:ClotheImageComponent},
  {path:"showroom",component:ShowroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
