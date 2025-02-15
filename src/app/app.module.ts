import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    OrdersModule,
    CartModule,
    UserModule,
    HomeModule,
    ContactModule,
    AdminModule,
    ReactiveFormsModule,
    AuthModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
