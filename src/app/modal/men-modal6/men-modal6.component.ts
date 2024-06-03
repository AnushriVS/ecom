import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-men-modal6',
  templateUrl: './men-modal6.component.html',
  styleUrls: ['./men-modal6.component.scss']
})
export class MenModal6Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<MenModal6Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 6,  // Ensure your product has a unique identifier
      brand: 'DENNISLINGO PREMIUM ATTIRE',
      title: 'Full Sleeves Slim Fit Shirt',
      description: 'Best shirt with full sleeves',
      rating:  3.6,
      reviews: '4.5K',
      price: 647,
      originalPrice: 1049,
      discount: '65%',
      offerPrice: 647,

      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20231205/LBwK/656ed464afa4cf41f5b4f686/-1117Wx1400H-462323964-white-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231205/yhHN/656ed464afa4cf41f5b4f6c2/-1117Wx1400H-462323964-white-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20231205/ZQGj/656ed464afa4cf41f5b4f6c7/-1117Wx1400H-462323964-white-MODEL3.jpg',
         'https://assets.ajio.com/medias/sys_master/root/20231205/7zXT/656ed464afa4cf41f5b4f6ca/-1117Wx1400H-462323964-white-MODEL6.jpg'
    ],
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
