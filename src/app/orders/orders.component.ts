import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: any[] = [];
  public canceledOrders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
    this.canceledOrders = this.orderService.getCanceledOrders();
  }

  cancelOrder(order: any) {
    if (confirm('Are you sure you want to cancel this order?')) {
      this.orderService.cancelOrder(order);
      this.orders = this.orderService.getOrders(); 
      this.canceledOrders = this.orderService.getCanceledOrders(); 
      alert('Your product has been canceled.');
    }
  }
}

