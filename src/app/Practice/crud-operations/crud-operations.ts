import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, signal, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

type nameModel = {
  id: number;
  name: string;
  editing: boolean;
};

@Component({
  selector: 'app-crud-operations',
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-operations.html',
  styleUrl: './crud-operations.css',
})
export class CrudOperations {
  @ViewChildren('inputref') inputField!: QueryList<ElementRef>;

  editBtn = signal(true);

  users: nameModel[] = [
    {
      id: 1,
      name: 'barani',
      editing: true,
    },
    {
      id: 1,
      name: 'prasaath',
      editing: true,
    },
    {
      id: 1,
      name: 'kishore',
      editing: true,
    },
    {
      id: 1,
      name: 'sanjay',
      editing: true,
    },
  ];

  editingIndex: number | null = null;

  actions(edit: boolean, index: number) {
    if (!edit) {
      this.editingIndex = index;
      this.users[index].editing = true;
      this.inputField.toArray()[index].nativeElement.value = '';
      this.inputField.toArray()[index].nativeElement.focus();
    } else {
      this.editingIndex = null;
      this.users[index].editing = false;
      this.inputField.toArray()[index].nativeElement.value = this.users[index].name;
      console.log(this.users);
    }
  }
}
