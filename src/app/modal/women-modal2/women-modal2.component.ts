import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-women-modal2',
  templateUrl: './women-modal2.component.html',
  styleUrls: ['./women-modal2.component.scss']
})
export class WomenModal2Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<WomenModal2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 7,  // Ensure your product has a unique identifier
      brand: 'FASHOR',
      title:'Women Floral Print A-Line Kurta Set',
      description: 'Floral Print Regular Fit Shirt',
      rating: 4.0,
      reviews: 12,
      price: 1710,
      originalPrice: 2499,
      discount: '61%',
      offerPrice: 3799,

      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20231130/7lDz/65679651afa4cf41f5a90c66/-1117Wx1400H-466746568-offwhite-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231130/GDhA/65679651afa4cf41f5a90c70/-1117Wx1400H-466746568-offwhite-MODEL4.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20231130/24C7/65679651afa4cf41f5a90c6b/-1117Wx1400H-466746568-offwhite-MODEL6.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231130/fON1/65679651afa4cf41f5a90c79/-1117Wx1400H-466746568-offwhite-MODEL7.jpg'
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