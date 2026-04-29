import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { FormsModule } from '@angular/forms';

export interface taskModel {
  taskname: string;
}

@Component({
  selector: 'app-todo-with-timer',
  imports: [TodoList, FormsModule],
  templateUrl: './todo-with-timer.html',
  styleUrl: './todo-with-timer.css',
})
export class TodoWithTimer {
  tasks = signal<taskModel[]>([]);
  input: taskModel = {
    taskname: '',
  };
  deleted = signal('');

  // filterTask = computed(() => {
  //   return this.tasks().filter((task) => task.taskname !== this.deleted());
  // });

  onClick() {
    const value = this.input.taskname.trim();
    this.tasks.update((d) => [...d, { taskname: value }]);
    this.input = { taskname: '' };
    console.log(this.tasks());
  }

  receiveMsg(msg: string) {
    console.log('From Parent: ', msg);
    this.deleted.set(msg);
    const filtered = this.tasks().filter((task) => task.taskname !== this.deleted());
    this.tasks.set(filtered);
  }
}
