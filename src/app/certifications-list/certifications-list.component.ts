import { Component, OnInit } from '@angular/core';
import { certifications } from '../certifications';


@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.css']
})
export class CertificationsListComponent implements OnInit {
  certifications = certifications;
  public showElement:number;
  constructor() { 
    /*console.log("certifications");
    console.log(certifications);*/
  }

  ngOnInit() {
  }
  
  showDetail(id){
    if(this.showElement!=id){
      this.showElement=id;
    }else{
      this.showElement=0;
    }
    
  }

  onNotify(){
    window.alert("this certification is modified");
  }
}
