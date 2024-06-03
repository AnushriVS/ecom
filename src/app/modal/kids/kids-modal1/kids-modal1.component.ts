import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-kids-modal1',
  templateUrl: './kids-modal1.component.html',
  styleUrls: ['./kids-modal1.component.scss']
})
export class KidsModal1Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<KidsModal1Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 11,  // Ensure your product has a unique identifier
      brand: 'FORTUNE FORGE',
      title: 'Panelled Woven Jacket with Hood',
      description: 'Flexible Jacket',
      rating: 4.8,
      reviews: '1.5K',
      price: 1149,
      originalPrice: 2298,
      discount: '50%',
      offerPrice: 1149,
      
      images: {

      
        'rgb(2,48,32)': [
          'https://assets.ajio.com/medias/sys_master/root/he2/hdd/13607079182366/-1117Wx1400H-460336484-green-MODEL.jpg',
         'https://assets.ajio.com/medias/sys_master/root/h01/ha3/13607079772190/-1117Wx1400H-460336484-green-MODEL3.jpg',
         'https://assets.ajio.com/medias/sys_master/root/h12/h3b/13607079510046/-1117Wx1400H-460336484-green-MODEL2.jpg',
         'https://assets.ajio.com/medias/sys_master/root/hd8/ha5/13607079968798/-473Wx593H-460336484-green-MODEL4.jpg',
    ],
        'Black': [
          'https://assets.ajio.com/medias/sys_master/root/hee/he9/13607074332702/-473Wx593H-460336484-black-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/ha5/h5e/13607073873950/-1117Wx1400H-460336484-black-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/hd5/h6d/13607074136094/-1117Wx1400H-460336484-black-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/h08/h4d/13607075840030/-1117Wx1400H-460336484-black-MODEL3.jpg'
        ]
      },
      colors: ['rgb(2,48,32)', 'Black'],
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