import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-women-modal4',
  templateUrl: './women-modal4.component.html',
  styleUrls: ['./women-modal4.component.scss']
})
export class WomenModal4Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<WomenModal4Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 9,  // Ensure your product has a unique identifier
      brand: 'AVAASA MIX N MATCH',
      title:'Foil Print Flared Kurta',
      description: 'Elegant Kurthi set with stripes',
      rating: 3.7,
      reviews: 4,
      price: 961,
      originalPrice: 1849,
      discount: '48%',
      offerPrice: 961,



      images: {
        'Pink': [
          'https://assets.ajio.com/medias/sys_master/root/20230605/KodM/647e25f342f9e729d725ab22/-473Wx593H-443017341-peach-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230605/tyCA/647dfea6d55b7d0c634d7532/-1117Wx1400H-443017341-peach-MODEL3.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20230605/Trzn/647e016542f9e729d723d1ff/-1117Wx1400H-443017341-peach-MODEL4.jpg',
    ],
        '	#000080':[
          'https://assets.ajio.com/medias/sys_master/root/20230605/hbLU/647e0d39d55b7d0c634dbeec/-1117Wx1400H-443017341-navyblue-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230605/VGjW/647dfa6ed55b7d0c634d5ded/-473Wx593H-443017341-navyblue-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230605/isr9/647e0ca2d55b7d0c634dbb5c/-1117Wx1400H-443017341-navyblue-MODEL3.jpg',

        ]
      },
      colors: ['Pink', '	#000080'],
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