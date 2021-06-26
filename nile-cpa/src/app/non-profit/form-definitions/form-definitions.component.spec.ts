import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDefinitionsComponent } from './form-definitions.component';

describe('FormDefinitionsComponent', () => {
  let component: FormDefinitionsComponent;
  let fixture: ComponentFixture<FormDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDefinitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
