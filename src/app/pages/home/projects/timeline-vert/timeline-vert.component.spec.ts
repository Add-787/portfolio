import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineVertComponent } from './timeline-vert.component';

describe('TimelineVerticalComponent', () => {
  let component: TimelineVertComponent;
  let fixture: ComponentFixture<TimelineVertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineVertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
