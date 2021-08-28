import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { EnvironmentInformationComponent } from './components/environment-information/environment-information.component';
import { HumanResourcesComponent } from './components/human-resources/human-resources.component';
import { MainComponent } from './components/main/main.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductionComponent } from './components/production/production.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:MainComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"company-profile",component:CompanyProfileComponent},
  {path:"environment-information",component:EnvironmentInformationComponent},
  {path:"certificate",component:CertificateComponent},
  {path:"human-resources",component:HumanResourcesComponent},
  {path:"production",component:ProductionComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
