import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineVertTileComponent } from './timeline-vert-tile.component';

describe('TimelineVertTileComponent', () => {
  let component: TimelineVertTileComponent;
  let fixture: ComponentFixture<TimelineVertTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineVertTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineVertTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
