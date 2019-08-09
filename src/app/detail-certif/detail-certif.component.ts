import { Component, OnInit, Input } from '@angular/core';
import { certifications } from '../certifications';

@Component({
  selector: 'app-detail-certif',
  templateUrl: './detail-certif.component.html',
  styleUrls: ['./detail-certif.component.css']
})
export class DetailCertifComponent implements OnInit {
 @Input() certification;
  constructor() { }

  ngOnInit() {
  }

}
