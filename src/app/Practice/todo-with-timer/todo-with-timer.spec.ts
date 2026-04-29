import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWithTimer } from './todo-with-timer';

describe('TodoWithTimer', () => {
  let component: TodoWithTimer;
  let fixture: ComponentFixture<TodoWithTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoWithTimer],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoWithTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
