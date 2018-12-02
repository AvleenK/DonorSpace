import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalUploadComponent } from './medical-upload.component';

describe('MedicalUploadComponent', () => {
  let component: MedicalUploadComponent;
  let fixture: ComponentFixture<MedicalUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
