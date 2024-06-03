import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-men-modal3',
  templateUrl: './men-modal3.component.html',
  styleUrls: ['./men-modal3.component.scss']
})
export class MenModal3Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<MenModal3Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 3,  // Ensure your product has a unique identifier
      brand: 'DEAIM',
      title: 'Men Striped Regular Fit Shirt',
      description: 'Men Striped Regular Fit Shirt',
      rating: 2.8,
      reviews: '4.5K',
      price: 1750,
      originalPrice: 1500,
      discount: '85%',
      offerPrice: 744,

      images: {
        '#13274F': [
          'https://assets.ajio.com/medias/sys_master/root/20240312/TLIF/65f0404216fd2c6e6a521a5e/-1117Wx1400H-467160486-blue-MODEL.png',
          'https://assets.ajio.com/medias/sys_master/root/20240312/5vj8/65f0405d16fd2c6e6a521bef/-1117Wx1400H-467160486-blue-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20240312/Chvt/65f0405d16fd2c6e6a521bee/-1117Wx1400H-467160486-blue-MODEL3.jpg',
         'https://assets.ajio.com/medias/sys_master/root/20240312/nZ61/65f0405d16fd2c6e6a521beb/-1117Wx1400H-467160486-blue-MODEL4.jpg'
    ],
      },
      colors: ['#13274F'],
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
