import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-kids-modal2',
  templateUrl: './kids-modal2.component.html',
  styleUrls: ['./kids-modal2.component.scss']
})
export class KidsModal2Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<KidsModal2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 12,  // Ensure your product has a unique identifier
      brand: 'FORTUNE FORGE',
      title: 'Tie & Dye A-line Dress with Embroidery',
      description: 'Wrap your child with cotton',
      rating: 5.0,
      reviews: '5.5K',
      price: 320,
      originalPrice: 1599 ,
      discount: '80%',
      offerPrice: 320,


      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/h4f/h48/12062444781598/-473Wx593H-460198713-indigo-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/h9a/h61/12062444519454/-473Wx593H-460198713-indigo-MODEL4.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/h4d/h43/12062446157854/-1117Wx1400H-460198713-indigo-MODEL3.jpg'
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