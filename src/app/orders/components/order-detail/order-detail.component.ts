import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderId!: number;
  orderDetails: any;  // Détails de la commande (exemple)

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));  // Récupérer l'ID de la commande depuis l'URL
    this.loadOrderDetails();
  }

  loadOrderDetails(): void {
    // Exemple de données statiques
    this.orderDetails = {
      id: this.orderId,
      customer: 'Client A',
      items: [
        { product: 'Produit 1', quantity: 2, price: 15 },
        { product: 'Produit 2', quantity: 1, price: 25 }
      ],
      total: 55
    };
  }
}
