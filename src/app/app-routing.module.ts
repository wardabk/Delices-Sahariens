import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';
import { OrderListComponent } from './orders/components/order-list/order-list.component';
import { OrderDetailComponent } from './orders/components/order-detail/order-detail.component';
import { CartSummaryComponent } from './cart/components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './cart/components/checkout/checkout.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ContactFormComponent } from './contact/components/contact-form/contact-form.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { StatisticsComponent } from './admin/components/statistics/statistics.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminProductListComponent } from './admin/components/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './admin/components/admin-product-form/admin-product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // Page d'accueil
  { path: 'products', component: ProductListComponent }, // Liste des produits
  { path: 'products/:id', component: ProductDetailComponent }, // Détail d'un produit avec ID
  { path: 'orders', component: OrderListComponent,canActivate: [AuthGuard] }, // Liste des commandes
  { path: 'orders/:id', component: OrderDetailComponent, canActivate: [AuthGuard] }, // Détail d'une commande avec ID
  { path: 'contact', component: ContactFormComponent }, // Contact
  { path: 'cart', component: CartSummaryComponent, canActivate: [AuthGuard] }, // Panier
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] }, // Paiement
  { path: 'login', component: LoginComponent }, // Connexion
  { path: 'signup', component: SignupComponent }, // Inscription
  { path: 'statistics', component: StatisticsComponent }, // Inscription
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: 'adminProduct', component: AdminProductListComponent },
      { path: 'statistics', component: StatisticsComponent},
      {path : 'orders', component :OrderListComponent},
       { path: 'products/new', component: AdminProductFormComponent },
       { path: 'products/edit/:id', component: AdminProductFormComponent},
       { path: '', redirectTo: 'adminProduct', pathMatch: 'full' },
    ]
  },

  { path: '**', redirectTo: '' }, // Gérer les routes inexistantes


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
