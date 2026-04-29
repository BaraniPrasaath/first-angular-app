import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-booking',
  imports: [],
  templateUrl: './ticket-booking.html',
  styleUrl: './ticket-booking.css',
})
export class TicketBooking {
  ids = new Set<string>();
  conformIds = new Set<string>();

  onClick(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element);
    const id: string | null = element.getAttribute('id');
    const ele = document.getElementById(id!)!;
    console.log(id);
    id ? (this.conformIds.has(id) ? '0' : this.ids?.add(id)) : '0';
    if (ele && ele.style.backgroundColor != 'red') ele.style.backgroundColor = 'yellow';
    console.log('current: ', this.ids);
    console.log('Booked: ', this.conformIds);
  }

  onEvent(event: Event) {
    const element = event.target as HTMLElement;
    const action: string | null = element.getAttribute('id');

    if (action === 'book') {
      if (this.conformIds.size != this.ids.size + this.conformIds.size) {
        for (let id of this.ids) {
          this.conformIds.add(id);
        }

        this.ids.clear();
        console.log('current: ', this.ids);
        console.log('Booked: ', this.conformIds);

        for (let id of this.conformIds) {
          const ele = document.getElementById(id);
          ele ? (ele.style.backgroundColor = 'red') : console.log('null');
        }
      }
    } else if (action === 'cancel') {
      for (let id of this.ids) {
        const ele = document.getElementById(id);
        ele ? (ele.style.backgroundColor = 'white') : '';
      }
    } else {
      for (let id of this.conformIds) {
        const ele = document.getElementById(id);
        ele ? (ele.style.backgroundColor = 'white') : '';
      }
      for (let id of this.ids) {
        const ele = document.getElementById(id);
        ele ? (ele.style.backgroundColor = 'white') : '';
      }
      this.conformIds.clear();
      this.ids.clear();
    }
  }
}
