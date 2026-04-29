import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiselect-dropdown',
  imports: [FormsModule],
  templateUrl: './multiselect-dropdown.html',
  styleUrl: './multiselect-dropdown.css',
})
export class MultiselectDropdown {
  up = signal(false);
  value = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  };
  submitted = signal(false);

  onClick() {
    this.up.update((d) => !d);
  }

  onSubmit() {
    this.submitted.set(true);
    console.log(this.value);
  }

  onClear() {
    this.submitted.set(false);
    this.value.option1 = false;
    this.value.option2 = false;
    this.value.option3 = false;
    this.value.option4 = false;
  }
}
