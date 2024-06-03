
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-home-kitchen-modal3',
  templateUrl: './home-kitchen-modal3.component.html',
  styleUrl: './home-kitchen-modal3.component.scss'
})export class HomeKitchenModal3Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<HomeKitchenModal3Component >,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 12,  // Ensure your product has a unique identifier
      brand: 'RANDOM',
      title: 'Set of 10 3D Collage Photo Frames',
      description: 'Brighten your house with our lights',
      rating: 3.9,
      reviews: '1.3K',
      price: 1359,
      originalPrice: 4248 ,
      discount: '61%',
      offerPrice: 1359,

      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20230624/v4d8/649645d5a9b42d15c9d8aa2a/-473Wx593H-465144477-black-MODEL.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20230624/4hRY/649645d5a9b42d15c9d8a9a9/-473Wx593H-465144477-black-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230624/gR1b/649645d5a9b42d15c9d8a9a7/-473Wx593H-465144477-black-MODEL5.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230624/aq7j/649645d5a9b42d15c9d8a9d4/-1117Wx1400H-465144477-black-MODEL3.jpg'
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