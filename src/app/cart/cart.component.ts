// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../service/cart.service';
// import { CookieService } from 'ngx-cookie-service';
// import { SharedService } from '../shared.service';
// import { OrderService } from '../service/order.service'; 

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {
//   grandtotal: number = 0;

//   public products: any = [];
//   public grandTotal!: number;
//   public couponCode: string = '';
//   public discount: number = 0;
//   public shippingAmount: number = 0;
  
//   constructor(
//     private cartService: CartService,
//     private cookieService: CookieService,
//     private sharedService: SharedService,
//     private orderService: OrderService 
//   ) {}

//   ngOnInit(): void {
//     this.cartService.getProducts().subscribe(res => {
//       this.products = res;
//       this.updateGrandTotal();
//     });

//     const savedCart = this.cookieService.get('cart');
//     if (savedCart) {
//       this.products = JSON.parse(savedCart);
//       this.updateGrandTotal();
//     }

//     this.sharedService.currentGrandTotal.subscribe(grandTotal => {
//       this.grandTotal = grandTotal;
//     });
//   }

//   removeItem(item: any) {
//     this.cartService.removeCartItem(item);
//     // this.updateCartInCookie();
//     this.updateGrandTotal();
//   }

//   emptycart() {
//     this.cartService.removeAllCart();
//     this.cookieService.delete('cart');
//     this.products = [];
//     this.updateGrandTotal();
//   }

//   updateCartInCookie() {
//     this.cookieService.set('cart', JSON.stringify(this.products));
//   }

//   updateGrandTotal() {
//     let total = this.cartService.getTotalPrice();
//     total = this.applyDiscount(total);
//     this.grandTotal = total + this.calculateShipping(total);
//     this.sharedService.updateGrandTotal(this.grandTotal);
//   }

//   applyCoupon() {
//     if (this.couponCode === 'ABCD') {
//       this.discount = 0.3;
//       window.alert('You got 30% discount');
//     } else if (this.couponCode === 'EFGH') {
//       this.discount = 0.1;
//       window.alert('You got 10% discount');
//     } else if (this.couponCode === 'IJKL') {
//       this.discount = 0.5;
//       window.alert('You got 50% discount');
//     } else {
//       this.discount = 0;
//     }
//     this.updateGrandTotal();
//   }

//   applyDiscount(total: number): number {
//     return total - (total * this.discount);
//   }

//   calculateShipping(total: number): number {
//     if (total < 2000) {
//       this.shippingAmount = 100;
//     } else {
//       this.shippingAmount = 0;
//     }
//     return this.shippingAmount;
//   }

//   addItemsToOrders() {
//     this.orderService.addOrders(this.products);
//     this.emptycart();
//   }

//   getTotalPrice(): number {
//     let grandTotal = 0;
//     this.products.forEach((item: any) => {
//       grandTotal += item.total;
//     });
//     return grandTotal;
//   }
  
//   increaseQuantity(item: any) {
//     item.quantity += 1;
//     item.total = item.quantity * item.price;
//     this.getTotalPrice();
//     this.grandTotal = this.getTotalPrice();
//   }
  
//   decreaseQuantity(item: any) {
//     if (item.quantity > 1) {
//       item.quantity -= 1;
//       item.total = item.quantity * item.price;
//       this.getTotalPrice();
//       this.grandTotal = this.getTotalPrice();
//     }
//   }  
// }

import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../shared.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any[] = [];
  public grandTotal: number = 0;
  public couponCode: string = '';
  public discount: number = 0;
  public shippingAmount: number = 0;

  constructor(
    private cartService: CartService,
    private cookieService: CookieService,
    private sharedService: SharedService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.loadCart();
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.updateGrandTotal();
    });
    this.sharedService.currentGrandTotal.subscribe(grandTotal => {
      this.grandTotal = grandTotal;
    });
  }

  loadCart() {
    const savedCart = this.cookieService.get('cart');
    if (savedCart) {
      this.products = JSON.parse(savedCart);
      this.updateGrandTotal();
    }
  }

  saveCart() {
    this.cookieService.set('cart', JSON.stringify(this.products));
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.products = this.products.filter(p => p !== item);
    this.saveCart();
    this.updateGrandTotal();
  }

  emptyCart() {
    this.cartService.removeAllCart();
    this.products = [];
    this.saveCart();
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.grandTotal = this.products.reduce((total, item) => total + item.total, 0);
    this.grandTotal = this.applyDiscount(this.grandTotal);
    this.grandTotal += this.calculateShipping(this.grandTotal);
    this.sharedService.updateGrandTotal(this.grandTotal);
    this.saveCart();
  }

  applyCoupon() {
    if (this.couponCode === 'ABCD') {
      this.discount = 0.3;
      window.alert('You got 30% discount');
    } else if (this.couponCode === 'EFGH') {
      this.discount = 0.1;
      window.alert('You got 10% discount');
    } else if (this.couponCode === 'IJKL') {
      this.discount = 0.5;
      window.alert('You got 50% discount');
    } else {
      this.discount = 0;
    }
    this.updateGrandTotal();
  }

  applyDiscount(total: number): number {
    return total - (total * this.discount);
  }

  calculateShipping(total: number): number {
    this.shippingAmount = total < 2000 ? 100 : 0;
    return this.shippingAmount;
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    item.total = item.quantity * item.price;
    this.saveCart();
    this.updateGrandTotal();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.total = item.quantity * item.price;
      this.saveCart();
      this.updateGrandTotal();
    }
  }

  addItemsToOrders() {
    this.orderService.addOrders(this.products);
    this.emptyCart();
  }
}


// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../service/cart.service';
// import { SharedService } from '../shared.service';
// import { OrderService } from '../service/order.service'; 

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {

//   public products: any = [];
//   public grandTotal!: number;
//   public couponCode: string = '';
//   public discount: number = 0;
//   public shippingAmount: number = 0;

//   constructor(
//     private cartService: CartService,
//     private sharedService: SharedService,
//     private orderService: OrderService 
//   ) {}

//   ngOnInit(): void {
//     this.cartService.getProducts().subscribe(res => {
//       this.products = res;
//       this.updateGrandTotal();
//     });

//     this.sharedService.currentGrandTotal.subscribe(grandTotal => {
//       this.grandTotal = grandTotal;
//     });
//   }

//   removeItem(item: any) {
//     this.cartService.removeCartItem(item);
//     this.updateGrandTotal();
//   }

//   emptycart() {
//     this.cartService.removeAllCart();
//     this.products = [];
//     this.updateGrandTotal();
//   }

//   updateGrandTotal() {
//     let total = this.cartService.getTotalPrice();
//     total = this.applyDiscount(total);
//     this.grandTotal = total + this.calculateShipping(total);
//     this.sharedService.updateGrandTotal(this.grandTotal);
//   }

//   applyCoupon() {
//     if (this.couponCode === 'ABCD') {
//       this.discount = 0.3;
//       window.alert('You got 30% discount');
//     } else if (this.couponCode === 'EFGH') {
//       this.discount = 0.1;
//       window.alert('You got 10% discount');
//     } else if (this.couponCode === 'IJKL') {
//       this.discount = 0.5;
//       window.alert('You got 50% discount');
//     } else {
//       this.discount = 0;
//     }
//     this.updateGrandTotal();
//   }

//   applyDiscount(total: number): number {
//     return total - (total * this.discount);
//   }

//   calculateShipping(total: number): number {
//     if (total < 2000) {
//       this.shippingAmount = 100;
//     } else {
//       this.shippingAmount = 0;
//     }
//     return this.shippingAmount;
//   }

//   addItemsToOrders() {
//     this.orderService.addOrders(this.products);
//     this.emptycart();
//   }

//   increaseQuantity(item: any) {
//     console.log("Increasing quantity for item:", item);
//     item.quantity++;
//     console.log("New quantity:", item.quantity);
//     this.updateGrandTotal();
//   }
  
//   decreaseQuantity(item: any) {
//     console.log("Decreasing quantity for item:", item);
//     if (item.quantity > 1) {
//       item.quantity--;
//       console.log("New quantity:", item.quantity);
//       this.updateGrandTotal(); 
//     }
//   }
// }
