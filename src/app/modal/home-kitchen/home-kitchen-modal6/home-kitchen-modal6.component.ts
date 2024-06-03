
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-home-kitchen-modal6',
  templateUrl: './home-kitchen-modal6.component.html',
  styleUrl: './home-kitchen-modal6.component.scss'
})export class HomeKitchenModal6Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<HomeKitchenModal6Component >,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 16,  // Ensure your product has a unique identifier
      brand: 'TAYHAA',
      title: 'Artificial Plant with Ceramic Planter',
      description: 'Brighten your house with our lights',
      rating: 4.7,
      reviews: '3.3K',
      price: 1800,
      originalPrice: 4500 ,
      discount: '60%',
      offerPrice: 1800,

      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20231015/RV3l/652c1c7fddf77915193e06c5/-473Wx593H-466711577-grey-MODEL.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20231015/BxSr/652c1c7fddf77915193e065e/-473Wx593H-466711577-grey-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231015/OgJt/652c1c7fddf77915193e0657/-473Wx593H-466711577-grey-MODEL5.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231015/4ufn/652c1c7fddf77915193e065b/-473Wx593H-466711577-grey-MODEL6.jpg'
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