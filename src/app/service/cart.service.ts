import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any>([]);

  public search = new BehaviorSubject<string>("");

  constructor(private cookieService: CookieService) {
    this.loadCartFromCookies();
  }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  addtoCart(product: any) {
    const existingProductIndex = this.cartItemList.findIndex(item => item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize);
    if (existingProductIndex !== -1) {
      this.cartItemList[existingProductIndex].quantity += 1;
      this.cartItemList[existingProductIndex].total = this.cartItemList[existingProductIndex].quantity * this.cartItemList[existingProductIndex].price;
    } else {
      product.quantity = 1;
      product.total = product.price;
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    this.saveCartToCookies();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList = this.cartItemList.filter(item => !(item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize));
    this.productList.next(this.cartItemList);
    this.saveCartToCookies();
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.cookieService.delete('cart');
  }

  private saveCartToCookies() {
    this.cookieService.set('cart', JSON.stringify(this.cartItemList));
  }

  private loadCartFromCookies() {
    const cart = this.cookieService.get('cart');
    if (cart) {
      this.cartItemList = JSON.parse(cart);
      this.productList.next(this.cartItemList);
    }
  }
}


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   public cartItemList: any[] = [];
//   public productList = new BehaviorSubject<any>([]);

//   public search = new BehaviorSubject<string>("");

//   constructor() {
//   }

//   getProducts() {
//     return this.productList.asObservable();
//   }

//   setProduct(product: any) {
//     this.cartItemList.push(...product);
//     this.productList.next(product);
//   }
  
//   addtoCart(product: any) {
//     const existingProductIndex = this.cartItemList.findIndex(item => item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize);
//     if (existingProductIndex !== -1) {
//       this.cartItemList[existingProductIndex].quantity += 1;
//       this.cartItemList[existingProductIndex].total = this.cartItemList[existingProductIndex].quantity * this.cartItemList[existingProductIndex].price;
//     } else {
//       product.quantity = 1;
//       product.total = product.price;
//       this.cartItemList.push(product);
//     }
//     this.productList.next(this.cartItemList);
//   }

//   getTotalPrice(): number {
//     let grandTotal = 0;
//     this.cartItemList.map((a: any) => {
//       grandTotal += a.total;
//     });
//     return grandTotal;
//   }

//   removeCartItem(product: any) {
//     this.cartItemList = this.cartItemList.filter(item => !(item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize));
//     this.productList.next(this.cartItemList);
//   }

//   removeAllCart() {
//     this.cartItemList = [];
//     this.productList.next(this.cartItemList);
//   }
// }
