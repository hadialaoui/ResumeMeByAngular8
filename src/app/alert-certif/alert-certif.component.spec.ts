import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCertifComponent } from './alert-certif.component';

describe('AlertCertifComponent', () => {
  let component: AlertCertifComponent;
  let fixture: ComponentFixture<AlertCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
