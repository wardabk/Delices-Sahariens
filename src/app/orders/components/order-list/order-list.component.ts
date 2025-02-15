import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders : Order[] = []; // Liste des commandes

  ngOnInit(): void {

    this.orders = [
      { id: 1, customer: 'Client A', total: 100, status: 'En cours' },
      { id: 2, customer: 'Client B', total: 200, status: 'Livré' }
    ];
  }
}

