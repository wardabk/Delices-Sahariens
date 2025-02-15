import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; // Corrigé : RouterModule depuis @angular/router
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut pour /home
];

@NgModule({
  imports: [
  
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
