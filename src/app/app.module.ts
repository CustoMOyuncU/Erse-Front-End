import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
