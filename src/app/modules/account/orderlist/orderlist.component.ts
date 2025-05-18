import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss'],
  standalone: false,
})
export class OrderlistComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe({
      next: res => this.orders = res.data,
      error: err => console.error('Failed to fetch orders', err)
    });
  }

  viewOrder(orderId: number): void {
    this.router.navigate(['/account/order', orderId]);
  }
}
