import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksIconComponent } from './links-icon.component';

describe('LinksIconComponent', () => {
  let component: LinksIconComponent;
  let fixture: ComponentFixture<LinksIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
