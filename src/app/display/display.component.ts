import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../service/form-data.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  searchKey: string = "";
  submittedData: any[] = [];

  constructor(private formDataService: FormDataService, private cartService: CartService) { }
  ngOnInit() {
    this.submittedData = this.formDataService.getSubmittedData();
    console.log('Submitted Data:', this.submittedData);

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtoCart(product: any) {
    const item = {
      id: product.id,
      title: product.productName,
      image: product.productImage,
      description: product.productDescription,
      price: product.productPrice,
      quantity: 1, 
      total: product.productPrice
    }; 
    this.cartService.addtoCart(item);
  }
}

