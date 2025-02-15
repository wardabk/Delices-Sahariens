import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];


  constructor(
    private productService: ProductService,
     private cartService: CartService,
     private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;

    });
  }
  addToCart(product: Product): void {

    // window.alert(`${product.name} a été ajouté au panier !`);

    this.cartService.addToCart(product, 1);
     // Afficher une notification toast
     this.toastr.success(`${product.name} a été ajouté au panier !`, 'Produit ajouté', {
      timeOut: 3000, // Durée en millisecondes
      positionClass: 'toast-bottom-right', // Position en bas à droite
      progressBar: true,
      closeButton: true
     });
  }
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
}

}
