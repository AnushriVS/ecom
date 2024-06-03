import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-men-modal5',
  templateUrl: './men-modal5.component.html',
  styleUrls: ['./men-modal5.component.scss']
})
export class MenModal5Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<MenModal5Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 5,  // Ensure your product has a unique identifier
      brand: 'THE BEAR HOUSE',
      title: 'Solid Shirt with Patch Pocket',
      description: 'Best shirt for with Patch Pocket',
      rating:  3.6,
      reviews: '4.5K',
      price: 1248,
      originalPrice: 2495,
      discount: '50%',
      offerPrice: 1248,

      images: {
        '#FFDB58': [
          'https://assets.ajio.com/medias/sys_master/root/20230525/QgJU/646ee61c42f9e729d7bbfd33/-1117Wx1400H-464734590-mustard-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230525/KK21/646ee61c42f9e729d7bbfd73/-1117Wx1400H-464734590-mustard-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20230525/upYT/646ee61c42f9e729d7bbfd78/-1117Wx1400H-464734590-mustard-MODEL3.jpg',
         'https://assets.ajio.com/medias/sys_master/root/20230525/xTiU/646ee61c42f9e729d7bbfd6f/-1117Wx1400H-464734590-mustard-MODEL4.jpg'
    ],
      },
      colors: ['#FFDB58'],
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
