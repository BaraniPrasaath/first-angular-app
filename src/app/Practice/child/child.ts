import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Output() color = new EventEmitter();

  emitColor()
  {
    this.color.emit();
  }
}
