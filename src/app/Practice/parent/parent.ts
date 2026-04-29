import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';
import { UndoComponent } from '../undo-component/undo-component';
import { SearchField } from '../search-field/search-field';
import { ReactiveForms } from '../reactive-forms/reactive-forms';
import { DynamicDropdown } from '../dynamic-dropdown/dynamic-dropdown';
import { CrudOperations } from '../crud-operations/crud-operations';
import { ReactiveForms2 } from '../reactive-forms2/reactive-forms2';
import { MultiselectDropdown } from '../multiselect-dropdown/multiselect-dropdown';
import { TodoWithTimer } from '../todo-with-timer/todo-with-timer';
import { GridEffect } from '../grid-effect/grid-effect';

@Component({
  selector: 'app-parent',
  imports: [
    Child,
    UndoComponent,
    SearchField,
    FormsModule,
    ReactiveForms,
    DynamicDropdown,
    CrudOperations,
    ReactiveForms2,
    MultiselectDropdown,
    TodoWithTimer,
    GridEffect,
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnDestroy, OnInit, AfterViewInit {
  // @ViewChild('refDiv') div!: ElementRef;
  // @ViewChild('refH1') element!: ElementRef;

  @ViewChild('inField') input!: ElementRef;

  bgToggle = signal('white');
  textToggle = signal('blue');

  inputText = signal('');
  areaText = signal('');

  undoStack: string[] = [];
  redoStack: string[] = [];
  prevValue = '';

  constructor(private renderer: Renderer2) {}

  changeColor() {
    this.bgToggle.set(this.bgToggle() === 'white' ? 'blue' : 'white');
    this.textToggle.set(this.textToggle() === 'white' ? 'blue' : 'white');
  }

  textChange(newValue: string) {
    this.undoStack.push(this.prevValue);
    this.redoStack.length = 0;
    this.areaText.set(newValue);
    console.log(this.undoStack);
    console.log(this.redoStack);
    this.prevValue = newValue;
  }

  undo() {
    this.redoStack.push(this.areaText());
    if (this.undoStack.length >= 0) {
      const prev = this.undoStack.pop();
      if (prev != undefined) this.areaText.set(prev);
    }
    console.log(this.undoStack);
    console.log(this.redoStack);
  }

  redo() {
    this.undoStack.push(this.areaText());
    if (this.redoStack.length >= 0) {
      const prev = this.redoStack.pop();
      if (prev != undefined) this.areaText.set(prev);
    }
    console.log(this.undoStack);
    console.log(this.redoStack);
  }

  clear() {
    this.undoStack.push(this.areaText());
    this.areaText.set('');
  }

  ngOnInit(): void {
    console.log('Component mounted one');
  }

  ngAfterViewInit(): void {
    // console.log(this.inputText())
    this.input.nativeElement.focus();
  }

  ngOnDestroy(): void {
    console.log('Component un-mounted two');
  }
}
