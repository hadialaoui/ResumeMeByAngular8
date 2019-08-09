import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CertificationsListComponent } from './certifications-list/certifications-list.component';
import { AlertCertifComponent } from './alert-certif/alert-certif.component';
import { DetailCertifComponent } from './detail-certif/detail-certif.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CertificationsListComponent,
    AlertCertifComponent,
    DetailCertifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
