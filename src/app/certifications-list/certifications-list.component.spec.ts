import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsListComponent } from './certifications-list.component';

describe('CertificationsListComponent', () => {
  let component: CertificationsListComponent;
  let fixture: ComponentFixture<CertificationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
