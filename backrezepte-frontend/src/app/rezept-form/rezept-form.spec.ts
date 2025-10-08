import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptForm } from './rezept-form';

describe('RezeptForm', () => {
  let component: RezeptForm;
  let fixture: ComponentFixture<RezeptForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezeptForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
