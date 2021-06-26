import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTaxComponent } from './individual-tax.component';

describe('IndividualTaxComponent', () => {
  let component: IndividualTaxComponent;
  let fixture: ComponentFixture<IndividualTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
