
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-home-kitchen-modal1',
  templateUrl: './home-kitchen-modal1.component.html',
  styleUrl: './home-kitchen-modal1.component.scss'
})export class HomeKitchenModal1Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<HomeKitchenModal1Component >,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 12,  // Ensure your product has a unique identifier
      brand: 'HOMESAKE',
      title: 'Floor Lamp with Bulb',
      description: 'Brighten your house with our lights',
      rating: 3.8,
      reviews: '1.5K',
      price: 2170,
      originalPrice: 7000 ,
      discount: '69%',
      offerPrice: 2170,

   
     
      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20231007/UfDJ/6520695dafa4cf41f530527b/-473Wx593H-466681313-white-MODEL.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20231007/bhuZ/6520695dafa4cf41f53051fe/-473Wx593H-466681313-white-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231007/BXd9/6520695dafa4cf41f53051ff/-473Wx593H-466681313-white-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231007/XemE/6520695dafa4cf41f5305201/-473Wx593H-466681313-white-MODEL5.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231007/BFVY/6520695dafa4cf41f5305210/-473Wx593H-466681313-white-MODEL6.jpg'
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