import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDoneComponent } from './medical-done.component';

describe('MedicalDoneComponent', () => {
  let component: MedicalDoneComponent;
  let fixture: ComponentFixture<MedicalDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
