import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-kids-modal3',
  templateUrl: './kids-modal3.component.html',
  styleUrls: ['./kids-modal3.component.scss']
})
export class KidsModal3Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<KidsModal3Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 13,  // Ensure your product has a unique identifier
      brand: 'FORTUNE FORGE',
      title: 'Graphic Print Top',
      description: 'Floral Print Regular Fit Shirt',
      rating: 3.9,
      reviews: '3.5K',
      price: 595,
      originalPrice: 700,
      discount: '15%',
      offerPrice: 595,

      images: {
        'Black': [
          'https://assets.ajio.com/medias/sys_master/root/h03/h7b/14408135475230/-1117Wx1400H-460425269-black-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/h61/h43/14408138194974/-1117Wx1400H-460425269-black-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/h62/h61/14408124399646/-473Wx593H-460425269-black-MODEL3.jpg'
    ],
        'Grey': [
          'https://assets.ajio.com/medias/sys_master/root/hc9/h65/14328098717726/-473Wx593H-460425269-greymelange-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/h0a/hc2/14328092426270/-1117Wx1400H-460425269-greymelange-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/h1d/h99/14328094949406/-473Wx593H-460425269-greymelange-MODEL3.jpg',
        ]
      },
      colors: ['Black', 'Grey'],
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