import { Routes } from '@angular/router';
import { Parent } from './Practice/parent/parent';
import { Main } from './main/main';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'practice', component: Parent },
];
