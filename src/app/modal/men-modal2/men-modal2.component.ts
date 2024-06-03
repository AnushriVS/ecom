import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-men-modal2',
  templateUrl: './men-modal2.component.html',
  styleUrls: ['./men-modal2.component.scss']
})
export class MenModal2Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<MenModal2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 2,  // Ensure your product has a unique identifier
      brand: 'VOOTER',
      title: 'Men Floral Print Regular Fit Shirt',
      description: 'Floral Print Regular Fit Shirt',
      rating: 4.0,
      reviews: '3.5K',
      price: 651,
      originalPrice: 744,
      discount: '76%',
      offerPrice: 651,

      images: {
        'rgb(255, 253, 208)': [
          'https://assets.ajio.com/medias/sys_master/root/20240312/5I5L/65f040f516fd2c6e6a522ce7/-1117Wx1400H-467160873-cream-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240312/6CPa/65f040f516fd2c6e6a522d27/-1117Wx1400H-467160873-cream-MODEL2.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20240312/tIjS/65f040f516fd2c6e6a522d23/-1117Wx1400H-467160873-cream-MODEL3.jpg',
         'https://assets.ajio.com/medias/sys_master/root/20240312/oTxy/65f040f516fd2c6e6a522d03/-473Wx593H-467160873-cream-MODEL4.jpg'
    ],
        '#808080': [
          'https://assets.ajio.com/medias/sys_master/root/20240320/rs99/65fab8a905ac7d77bbcb0891/-1117Wx1400H-467160873-grey-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240320/BzUL/65fab8a905ac7d77bbcb08cc/-1117Wx1400H-467160873-grey-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240320/bwxN/65fab8a905ac7d77bbcb08c3/-1117Wx1400H-467160873-grey-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240320/ThSt/65fab8a905ac7d77bbcb08c8/-1117Wx1400H-467160873-grey-MODEL4.jpg'
        ],
        'Brown': [
          'https://assets.ajio.com/medias/sys_master/root/20240312/8SBx/65f0412c16fd2c6e6a5233df/-1117Wx1400H-467160873-brown-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240312/42T3/65f0412c16fd2c6e6a523415/-1117Wx1400H-467160873-brown-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240312/Adnc/65f0412c16fd2c6e6a523420/-1117Wx1400H-467160873-brown-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20240312/EPfx/65f0412c16fd2c6e6a52341f/-1117Wx1400H-467160873-brown-MODEL4.jpg'
        ]
      },
      colors: ['rgb(255, 253, 208)', '#808080', 'Brown'],
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
