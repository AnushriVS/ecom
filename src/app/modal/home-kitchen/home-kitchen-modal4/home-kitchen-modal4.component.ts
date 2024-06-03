
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-home-kitchen-modal4',
  templateUrl: './home-kitchen-modal4.component.html',
  styleUrl: './home-kitchen-modal4.component.scss'
})export class HomeKitchenModal4Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<HomeKitchenModal4Component >,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 12,  // Ensure your product has a unique identifier
      brand: 'EXCLUSIVELANE',
      title: 'Hand5woven Conical Hanging Pendant Lamp',
      description: 'Brighten your house with our lights',
      rating: 3.5,
      reviews: '1.3K',
      price: 1359,
      originalPrice: 2675 ,
      discount: '57%',
      offerPrice: 1150,

      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20230705/9pLN/64a50e4deebac147fc4dff99/-1117Wx1400H-464730428-brown-MODEL.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20230705/WNpR/64a50e4deebac147fc4dffb5/-473Wx593H-464730428-brown-MODEL5.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230705/Y7AY/64a50e4deebac147fc4dffd3/-1117Wx1400H-464730428-brown-MODEL4.jpg'
    ]
      },
      colors: ['White'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    };

    this.selectColor(this.selectedProduct.colors[0]);
    this.selectedSize = this.selectedProduct.sizes[0];
    this.startImageCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.imageCarouselInterval);
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  selectColor(color: string) {
    this.selectedColor = color;
    this.selectedProductImages = this.selectedProduct.images[color];
    this.selectedImage = this.selectedProductImages[0];
    this.startImageCarousel();
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  addtoCart(item: any) {
    const productToAdd = {
      ...item,
      selectedColor: this.selectedColor,
      selectedSize: this.selectedSize,
      image: this.selectedImage
    };
    this.cartService.addtoCart(productToAdd);
    window.alert('Your product has been added to the cart!');
  }

  startImageCarousel() {
    if (this.imageCarouselInterval) {
      clearInterval(this.imageCarouselInterval);
    }

    let currentImageIndex = 0;
    this.imageCarouselInterval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % this.selectedProductImages.length;
      this.selectedImage = this.selectedProductImages[currentImageIndex];
    }, 3000); // Change image every 3 seconds
  }

  closeDialog(): void {
    clearInterval(this.imageCarouselInterval);
    this.dialogRef.close();
  }
}