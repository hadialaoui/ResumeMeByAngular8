import { Component, OnInit, Input } from '@angular/core';
import { certifications } from '../certifications';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-certif',
  templateUrl: './detail-certif.component.html',
  styleUrls: ['./detail-certif.component.css']
})
export class DetailCertifComponent implements OnInit {
  certification;
 /*@Input() certification;*/
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.certification = certifications[+params.get('CertifId')];
    }

    )
    
  }

}
