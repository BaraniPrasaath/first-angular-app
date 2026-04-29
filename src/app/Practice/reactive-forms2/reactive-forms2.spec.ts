import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForms2 } from './reactive-forms2';

describe('ReactiveForms2', () => {
  let component: ReactiveForms2;
  let fixture: ComponentFixture<ReactiveForms2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveForms2],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveForms2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
