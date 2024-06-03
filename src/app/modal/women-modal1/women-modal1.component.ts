import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-women-modal1',
  templateUrl: './women-modal1.component.html',
  styleUrls: ['./women-modal1.component.scss']
})
export class WomenModal1Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<WomenModal1Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 7,  // Ensure your product has a unique identifier
      brand: 'FASHOR',
      title:'Women Floral Print V-Neck Straight Kurta',
      description: 'Floral Print Regular Fit Shirt',
      rating: 4.0,
      reviews: '3.9K',
      price: 975,
      originalPrice: 2499,
      discount: '61%',
      offerPrice: 975,


      images: {
        'Pink': [
          'https://assets.ajio.com/medias/sys_master/root/20240315/mEp8/65f385c016fd2c6e6a5ef717/-473Wx593H-467167529-pink-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240315/rLG0/65f385c016fd2c6e6a5ef6ea/-1117Wx1400H-467167529-pink-MODEL4.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20240315/BQoz/65f385c016fd2c6e6a5ef6ef/-1117Wx1400H-467167529-pink-MODEL6.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240315/NjZJ/65f385c016fd2c6e6a5ef6d8/-473Wx593H-467167529-pink-MODEL7.jpg'
    ]
      },
      colors: ['Pink'],
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