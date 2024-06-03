
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-home-kitchen-modal5',
  templateUrl: './home-kitchen-modal5.component.html',
  styleUrl: './home-kitchen-modal5.component.scss'
})export class HomeKitchenModal5Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<HomeKitchenModal5Component >,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 15,  // Ensure your product has a unique identifier
      brand: 'NAUTICA',
      title: 'Quartz Silent Sweep Wall Clock',
      description: 'Nautica clock',
      rating: 4.5,
      reviews: '1.1K',
      price: 2294,
      originalPrice: 2699 ,
      discount: '15%',
      offerPrice: 2294,


      images: {
        'Black': [
          'https://assets.ajio.com/medias/sys_master/root/20240109/49lX/659d761754c30e6276a0ab23/-1117Wx1400H-466967427-black-MODEL.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20240109/evSh/659d761754c30e6276a0ab3b/-473Wx593H-466967427-black-MODEL5.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240109/Q2l9/659d761754c30e6276a0ab63/-1117Wx1400H-466967427-black-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240109/Qj7G/659d761754c30e6276a0ab40/-473Wx593H-466967427-black-MODEL8.jpg'
    ]
      },
      colors: ['Black'],
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