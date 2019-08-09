import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationsListComponent } from './certifications-list/certifications-list.component';



const routes: Routes = [
  {path: 'certifications', component: CertificationsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
