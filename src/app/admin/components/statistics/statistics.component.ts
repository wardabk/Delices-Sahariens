import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  totalProducts: number = 0;
  totalOrders: number = 0;
  productChart: any;
  orderChart: any;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.productService.getProducts().subscribe((products) => {
      this.totalProducts = products.length;
    });
    // Chargez les commandes ici si vous avez un service pour les commandes
  }
}
