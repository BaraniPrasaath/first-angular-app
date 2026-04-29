import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type countryModel = {
  def: string[];
  Asia: string[];
  Australia: string[];
  Africa: string[];
  Europe: string[];
  America: string[];
};

@Component({
  selector: 'app-dynamic-dropdown',
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-dropdown.html',
  styleUrl: './dynamic-dropdown.css',
})
export class DynamicDropdown {
  continent: string[] = ['Asia', 'Australia', 'Africa', 'Europe', 'America'];
  countries: countryModel = {
    def: ['select country'],
    Asia: ['India', 'China', 'Russia', 'Pakistan', 'Arabia'],
    Australia: ['Australia', 'Austria', 'Newzland'],
    Africa: ['South Africa'],
    Europe: ['England', 'London', 'UK'],
    America: ['Brazil', 'USA', 'North America', 'South America'],
  };

  selectedContinent: keyof countryModel = 'def';
  selectedCountry: string = '';
}
