import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDueDateComponent } from './tax-due-date.component';

describe('TaxDueDateComponent', () => {
  let component: TaxDueDateComponent;
  let fixture: ComponentFixture<TaxDueDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDueDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
