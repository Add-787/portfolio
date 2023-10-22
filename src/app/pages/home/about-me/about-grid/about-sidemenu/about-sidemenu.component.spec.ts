import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSidemenuComponent } from './about-sidemenu.component';

describe('AboutSidemenuComponent', () => {
  let component: AboutSidemenuComponent;
  let fixture: ComponentFixture<AboutSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSidemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
