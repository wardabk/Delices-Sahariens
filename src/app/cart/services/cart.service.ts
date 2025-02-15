import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: Product, quantity: number }[] = [];

  // Ajouter un produit au panier
  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity });
    }
  }

  // Retirer un produit du panier
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }
// Mettre à jour la quantité d'un produit dans le panier
updateQuantity(productId: number, quantity: number): void {
  const item = this.cartItems.find(item => item.product.id === productId);
  if (item) {
    item.quantity = quantity;
  }
}

// Récupérer les articles du panier
getCartItems(): { product: Product, quantity: number }[] {
  return this.cartItems;
}

// Calculer le total du panier
getTotal(): number {
  return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
}
// Vider le panier
clearCart(): void {
  this.cartItems = [];
}
}


