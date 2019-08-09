import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCertifComponent } from './detail-certif.component';

describe('DetailCertifComponent', () => {
  let component: DetailCertifComponent;
  let fixture: ComponentFixture<DetailCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
