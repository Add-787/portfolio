import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationBoxComponent } from './education-box.component';

describe('EducationBoxComponent', () => {
  let component: EducationBoxComponent;
  let fixture: ComponentFixture<EducationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
