import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }


createProduct(newProduct: Product): Observable<Product> {
  return this.getProducts().pipe(
      map(products => {
          const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
          return { ...newProduct, id: maxId + 1 };
      }),
      switchMap(productWithId => this.http.post<Product>(this.apiUrl, productWithId))
  );
}

  updateProduct(id: number, updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, updatedProduct);
  }


  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
        tap(() => console.log(`Produit ${id} supprimé`)) // Log pour vérification
    );
}

}


