import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartSummaryComponent,
     CheckoutComponent],

  imports: [CommonModule, FormsModule, SharedModule, CartRoutingModule],
  exports: [
    CartSummaryComponent,
    CheckoutComponent
  ]
})
export class CartModule {}
