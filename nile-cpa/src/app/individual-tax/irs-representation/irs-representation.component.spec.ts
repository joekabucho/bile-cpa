import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrsRepresentationComponent } from './irs-representation.component';

describe('IrsRepresentationComponent', () => {
  let component: IrsRepresentationComponent;
  let fixture: ComponentFixture<IrsRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrsRepresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrsRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
