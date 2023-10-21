import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGridComponent } from './about-grid.component';

describe('AboutGridComponent', () => {
  let component: AboutGridComponent;
  let fixture: ComponentFixture<AboutGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
