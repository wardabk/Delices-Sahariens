import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:  [
    OrderListComponent,
    OrderDetailComponent
  ]
})
export class OrdersModule { }
