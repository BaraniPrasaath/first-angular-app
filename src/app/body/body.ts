import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  @Input() Person: string = 'prasaath';

  @Output() msg = new EventEmitter();

  fromChild() {
    this.msg.emit('message from child');
  }

  count = signal(0);

  onCount() {
    this.count.update((val) => val + 1);
  }
}
