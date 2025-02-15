import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = []; 
  searchText: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = [...this.products];
    });
  }

  filterProducts(): void {
    if (!this.searchText) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>

         product.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }


  }

  editProduct(id: number): void {
    this.router.navigate(['/admin/products/edit', id]);
  }


deleteProduct(id: number): void {
  if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        alert(`Produit ${id} supprimé avec succès !`);
        this.products = this.products.filter(product => product.id !== id);
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Erreur lors de la suppression du produit', error);
      }
    );
  }
}
}
