import { Component, DestroyRef, effect, inject, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-field',
  imports: [FormsModule],
  templateUrl: './search-field.html',
  styleUrl: './search-field.css',
})
export class SearchField {
  /*************TYPE ONE*************/

  // searchText = signal('');
  // private timer: any;

  // searchFn(value: string) {
  //   clearTimeout(this.timer);

  //   this.timer = setTimeout(() => {
  //     console.log('API Called');
  //   }, 500);

  //   this.searchText.set(value);
  //   console.log(this.searchText());
  // }

  /*************TYPE TWO*************/

  // searchText$ = new Subject<string>();
  // searchVal = signal('');

  // constructor() {
  //   this.searchText$
  //     .pipe(debounceTime(500))
  //     .subscribe(() => console.log('API Called', this.searchVal()));
  // }

  // searchFn(val:string){
  //   this.searchText$.next(val);
  // }

  /*************TYPE THREE*************/

  searchText = signal('');
  private timer: any;

  private destroy = inject(DestroyRef);

  constructor() {
    effect(() => {
      const value = this.searchText();

      if (!value || value.length < 2) return;

      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        console.log('API Called --> ', value);
      }, 500);
    });

    this.destroy.onDestroy(() => clearTimeout(this.timer));
  }

  searchFn(text: string) {
    this.searchText.set(text);
  }
}
