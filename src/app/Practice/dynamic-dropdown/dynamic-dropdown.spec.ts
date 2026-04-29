import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDropdown } from './dynamic-dropdown';

describe('DynamicDropdown', () => {
  let component: DynamicDropdown;
  let fixture: ComponentFixture<DynamicDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
