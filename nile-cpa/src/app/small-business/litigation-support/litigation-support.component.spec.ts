import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationSupportComponent } from './litigation-support.component';

describe('LitigationSupportComponent', () => {
  let component: LitigationSupportComponent;
  let fixture: ComponentFixture<LitigationSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigationSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigationSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
