import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptDetails } from './rezept-details';

describe('RezeptDetails', () => {
  let component: RezeptDetails;
  let fixture: ComponentFixture<RezeptDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezeptDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
