import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrsFormsComponent } from './irs-forms.component';

describe('IrsFormsComponent', () => {
  let component: IrsFormsComponent;
  let fixture: ComponentFixture<IrsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
