import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cookieService: CookieService) {}

  addOrders(products: any[]) {
    let storedOrders = this.cookieService.get('orders');
    let orders = storedOrders ? JSON.parse(storedOrders) : [];
    orders.push(...products);
    this.cookieService.set('orders', JSON.stringify(orders));
  }

  getOrders(): any[] {
    let storedOrders = this.cookieService.get('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  }

  getCanceledOrders(): any[] {
    let storedCanceledOrders = this.cookieService.get('canceledOrders');
    return storedCanceledOrders ? JSON.parse(storedCanceledOrders) : [];
  }

  cancelOrder(order: any) {
    // Get current orders and remove the canceled order by ID
    let orders = this.getOrders();
    orders = orders.filter(o => o.id !== order.id); // Correctly remove the order by ID
    this.cookieService.set('orders', JSON.stringify(orders));

    // Add the canceled order to the canceled orders list
    let canceledOrders = this.getCanceledOrders();
    canceledOrders.push(order);
    this.cookieService.set('canceledOrders', JSON.stringify(canceledOrders));
  }
}
