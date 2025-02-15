import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productId: number | null = null;
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: ''
  };
  isEditMode: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.productId = idParam ? +idParam : null;

    if (this.productId) {
      this.isEditMode = true;
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(
      (product: Product) => {
        this.product = product;
        console.log('Produit chargé:', this.product);
      },
      (error) => {
        console.error('Erreur lors du chargement du produit', error);
      }
    );
  }

  onSubmit(): void {




    if (this.isEditMode) {
      if (!this.productId) {
        alert('ID du produit invalide');
        return;
      }
      this.productService.updateProduct(this.productId!, this.product).subscribe(
        () => {
          alert('Produit mis à jour avec succès !');
          this.router.navigate(['/admin/products']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du produit', error);
        }
      );
    } else {
      this.productService.createProduct(this.product).subscribe(
        () => {
          alert('Produit ajouté avec succès !');
          this.router.navigate(['/admin/products']); // Redirection après création
        },
        (error) => {
          console.error('Erreur lors de la création du produit', error);
        }
      );
    }
  }
}


