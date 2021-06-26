import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrsProblemComponent } from './irs-problem.component';

describe('IrsProblemComponent', () => {
  let component: IrsProblemComponent;
  let fixture: ComponentFixture<IrsProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrsProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrsProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
