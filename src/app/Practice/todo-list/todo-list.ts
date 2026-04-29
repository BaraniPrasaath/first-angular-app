import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { taskModel } from '../todo-with-timer/todo-with-timer';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit, OnDestroy {
  @Input() task!: taskModel;
  @Output() msg = new EventEmitter();

  timer = signal(0);
  intervalId: any = '';
  start = signal(false);

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.start.update((d) => (d ? false : true));
    this.intervalId = setInterval(() => this.timer.update((d) => d + 1), 1000);
  }

  onPause() {
    this.start.update((d) => (d ? false : true));
    clearInterval(this.intervalId);
  }

  onRestart() {
    this.timer.set(0);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  onDelete() {
    console.log(this.task.taskname);
    this.msg.emit(this.task.taskname);
  }
}
