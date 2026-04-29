import { Component } from '@angular/core';
import { Body } from '../body/body';

@Component({
  selector: 'app-main',
  imports: [Body],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

  parentMsg:string="hii..no messages yet";

  receiveMessage(message:string){
    this.parentMsg = message;
  }

  name = 'barani'
}
