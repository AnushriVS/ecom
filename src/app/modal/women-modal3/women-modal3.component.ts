import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-women-modal3',
  templateUrl: './women-modal3.component.html',
  styleUrls: ['./women-modal3.component.scss']
})
export class WomenModal3Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<WomenModal3Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 9,  // Ensure your product has a unique identifier
      brand: 'SHAILY',
      title:'Stripes Straight Kurta',
      description: 'Elegant Kurthi set with stripes',
      rating: 3.2,
      reviews: 12,
      price: 310,
      originalPrice: 738,
      discount: '58%',
      offerPrice: 310,


      images: {
        'Violet': [
          'https://assets.ajio.com/medias/sys_master/root/20240416/B6So/661ec3ea05ac7d77bb11b2ee/-473Wx593H-467229217-violet-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240416/frAB/661ec3ea05ac7d77bb11b2a2/-1117Wx1400H-467229217-violet-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20240416/NEua/661ec3f105ac7d77bb11b35e/-1117Wx1400H-467229217-violet-MODEL5.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240416/NEua/661ec3f105ac7d77bb11b35e/-1117Wx1400H-467229217-violet-MODEL5.jpg'
    ],
        'Black':[
          'https://assets.ajio.com/medias/sys_master/root/20240416/7TWS/661ec00f16fd2c6e6ab93c7d/-473Wx593H-467229217-black-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240416/DTWP/661ec00f16fd2c6e6ab93c0c/-473Wx593H-467229217-black-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240416/u9jp/661ec00f16fd2c6e6ab93c05/-473Wx593H-467229217-black-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240416/MQKx/661ec00f16fd2c6e6ab93c10/-473Wx593H-467229217-black-MODEL5.jpg'

        ]
      },
      colors: ['Violet', 'Black'],
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