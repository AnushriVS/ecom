
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../../service/cart.service';


@Component({
  selector: 'app-home-kitchen-modal2',
  templateUrl: './home-kitchen-modal2.component.html',
  styleUrl: './home-kitchen-modal2.component.scss'
})export class HomeKitchenModal2Component implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<HomeKitchenModal2Component >,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 12,  // Ensure your product has a unique identifier
      brand: 'HOMESAKE',
      title: 'Printed Cotton Door Curtain',
      description: 'Brighten your house with our lights',
      rating: 3.8,
      reviews: '2.5K',
      price: 2170,
      originalPrice: 2499 ,
      discount: '61%',
      offerPrice: 975,

     
      images: {
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20230628/j43b/649c0f72a9b42d15c91257c1/-1117Wx1400H-465922157-multi-MODEL.jpg' ,
          'https://assets.ajio.com/medias/sys_master/root/20230628/EJRX/649c0f72a9b42d15c91257f9/-1117Wx1400H-465922157-multi-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230628/1rpJ/649c0f72a9b42d15c9125804/-1117Wx1400H-465922157-multi-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20230628/GVTl/649c0f72a9b42d15c91257db/-473Wx593H-465922157-multi-MODEL5.jpg'
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