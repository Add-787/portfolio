import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsLinkComponent } from './tools-link.component';

describe('ToolsLinkComponent', () => {
  let component: ToolsLinkComponent;
  let fixture: ComponentFixture<ToolsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
