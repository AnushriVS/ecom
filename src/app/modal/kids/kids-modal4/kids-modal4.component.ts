import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-kids-modal4',
  templateUrl: './kids-modal4.component.html',
  styleUrls: ['./kids-modal4.component.scss']
})
export class KidsModal4Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<KidsModal4Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 14,  // Ensure your product has a unique identifier
      brand: 'CAPTAIN MARVEL',
      title: 'Graphic Print Top',
      description: 'Make your child to feel like a super hero',
      rating: 5.0,
      reviews: '10.5K',
      price: 450,
      originalPrice: 899,
      discount: '50%',
      offerPrice: 450,

      images: {
        'Brown': [
          'https://assets.ajio.com/medias/sys_master/root/20230602/lzVo/647955c9d55b7d0c633b9305/-473Wx593H-462198876-multi-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230602/kw5I/647955c9d55b7d0c633b92ae/-1117Wx1400H-462198876-multi-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20230602/7ks7/647955c9d55b7d0c633b927f/-473Wx593H-462198876-multi-MODEL3.jpg',
    ],
        
      },
      colors: ['Brown'],
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