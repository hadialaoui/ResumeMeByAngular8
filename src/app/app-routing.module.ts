import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationsListComponent } from './certifications-list/certifications-list.component';
import { DetailCertifComponent } from './detail-certif/detail-certif.component';



const routes: Routes = [
  {path: 'certifications', component: CertificationsListComponent},
  {path: 'certifications/detail/:idCertif', component: DetailCertifComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
