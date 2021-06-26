import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictOfInterestComponent } from './conflict-of-interest.component';

describe('ConflictOfInterestComponent', () => {
  let component: ConflictOfInterestComponent;
  let fixture: ComponentFixture<ConflictOfInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConflictOfInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictOfInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
