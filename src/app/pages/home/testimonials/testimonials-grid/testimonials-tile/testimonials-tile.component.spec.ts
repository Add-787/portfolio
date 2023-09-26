import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsTileComponent } from './testimonials-tile.component';

describe('TestimonialsTileComponent', () => {
  let component: TestimonialsTileComponent;
  let fixture: ComponentFixture<TestimonialsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
