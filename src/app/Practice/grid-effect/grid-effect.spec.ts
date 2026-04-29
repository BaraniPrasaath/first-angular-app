import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEffect } from './grid-effect';

describe('GridEffect', () => {
  let component: GridEffect;
  let fixture: ComponentFixture<GridEffect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridEffect],
    }).compileComponents();

    fixture = TestBed.createComponent(GridEffect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
