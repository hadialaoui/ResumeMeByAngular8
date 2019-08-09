import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alert-certif',
  templateUrl: './alert-certif.component.html',
  styleUrls: ['./alert-certif.component.css']
})
export class AlertCertifComponent implements OnInit {
 @Input() certification;
 @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
