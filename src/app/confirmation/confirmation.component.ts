import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../service/payment.service';
import { CartService } from '../service/cart.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  transactionId = "";

  constructor(
    private payment: PaymentService,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.transactionId = this.payment.transactionID;
    this.completeOrder();
  }

  completeOrder() {
    this.cartService.getProducts().subscribe(products => {
      this.orderService.addOrders(products);
      this.cartService.removeAllCart();
    });
  }
}
