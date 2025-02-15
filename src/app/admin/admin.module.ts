import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [

    AdminProductListComponent,
    AdminProductFormComponent,
    DashboardComponent,
    StatisticsComponent,
    MenuComponent,

  ],
  imports: [CommonModule, SharedModule, FormsModule, AdminRoutingModule]

})
export class AdminModule {}
