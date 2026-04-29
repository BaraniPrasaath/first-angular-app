import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-effect',
  imports: [],
  templateUrl: './grid-effect.html',
  styleUrl: './grid-effect.css',
})
export class GridEffect {
  click = false;

  element: any = '';

  onClick(event: Event) {
    this.element = event.target as HTMLElement;

    console.log(this.element.getAttribute('id'));
    this.element.style.backgroundColor = this.click ? 'white' : 'lightgreen';
    this.click = !this.click;
  }

  onReset() {}
}
