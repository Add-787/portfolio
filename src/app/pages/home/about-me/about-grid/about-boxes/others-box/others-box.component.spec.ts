import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersBoxComponent } from './others-box.component';

describe('OthersBoxComponent', () => {
  let component: OthersBoxComponent;
  let fixture: ComponentFixture<OthersBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
