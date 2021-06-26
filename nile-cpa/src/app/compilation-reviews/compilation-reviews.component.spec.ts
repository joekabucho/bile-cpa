import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilationReviewsComponent } from './compilation-reviews.component';

describe('CompilationReviewsComponent', () => {
  let component: CompilationReviewsComponent;
  let fixture: ComponentFixture<CompilationReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilationReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilationReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
