import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesBoxComponent } from './hobbies-box.component';

describe('HobbiesBoxComponent', () => {
  let component: HobbiesBoxComponent;
  let fixture: ComponentFixture<HobbiesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
