import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-men-modal4',
  templateUrl: './men-modal4.component.html',
  styleUrls: ['./men-modal4.component.scss']
})
export class MenModal4Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<MenModal4Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 4,  // Ensure your product has a unique identifier
      brand: 'GESPO',
      title: 'Men Regular Fit Shirt with Spread Collar',
      description: 'Linen cloth material with spread collar',
      rating:  3.5,
      reviews: '3.5K',
      price: 420,
      originalPrice: 1499,
      discount: '72%',
      offerPrice: 420,

      images: {
        'Teal': [
          'https://assets.ajio.com/medias/sys_master/root/20240305/3xms/65e7499b16fd2c6e6a3d87bc/-1117Wx1400H-467125560-teal-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240305/7Hne/65e7499b16fd2c6e6a3d87f9/-1117Wx1400H-467125560-teal-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20240305/ewQv/65e7499b16fd2c6e6a3d8800/-1117Wx1400H-467125560-teal-MODEL3.jpg',
         'https://assets.ajio.com/medias/sys_master/root/20240305/JmS5/65e7499b16fd2c6e6a3d87fb/-1117Wx1400H-467125560-teal-MODEL4.jpg'
    ],
        '#2E8B57': [
          'https://assets.ajio.com/medias/sys_master/root/20240301/3GPC/65e1d7ad05ac7d77bb8f97e5/-1117Wx1400H-467125560-seagreen-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240301/4aUp/65e1d7ad05ac7d77bb8f981e/-1117Wx1400H-467125560-seagreen-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240301/3qAS/65e1d7ad05ac7d77bb8f981c/-1117Wx1400H-467125560-seagreen-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240301/OguM/65e1d7ad05ac7d77bb8f9828/-1117Wx1400H-467125560-seagreen-MODEL4.jpg'
        ],
        'Red': [
          'https://assets.ajio.com/medias/sys_master/root/20240301/BD14/65e1d79905ac7d77bb8f94d9/-1117Wx1400H-467125560-red-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240301/sXxw/65e1d79905ac7d77bb8f9528/-1117Wx1400H-467125560-red-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240301/Ubab/65e1d79905ac7d77bb8f951d/-1117Wx1400H-467125560-red-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240301/b4eV/65e1d79905ac7d77bb8f9526/-1117Wx1400H-467125560-red-MODEL4.jpg'
        ]
      },
      colors: ['Teal', '#2E8B57', 'Red'],
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
