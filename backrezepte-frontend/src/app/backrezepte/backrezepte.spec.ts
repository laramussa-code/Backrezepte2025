import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backrezepte } from './backrezepte';

describe('Backrezepte', () => {
  let component: Backrezepte;
  let fixture: ComponentFixture<Backrezepte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Backrezepte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Backrezepte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
