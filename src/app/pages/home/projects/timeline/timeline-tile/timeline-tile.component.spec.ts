import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTileComponent } from './timeline-tile.component';

describe('TimelineTileComponent', () => {
  let component: TimelineTileComponent;
  let fixture: ComponentFixture<TimelineTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
