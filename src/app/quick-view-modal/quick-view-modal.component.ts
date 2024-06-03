import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { CartService } from '../service/cart.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quick-view-modal',
  templateUrl: './quick-view-modal.component.html',
  styleUrls: ['./quick-view-modal.component.scss']
})
export class QuickViewModalComponent implements OnInit, OnDestroy {
  selectedProduct: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedProductImages: string[] = [];
  imageCarouselInterval: any;

  constructor(private cartService: CartService,
              public dialogRef: MatDialogRef<QuickViewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.selectedProduct = {
      id: 1,  // Ensure your product has a unique identifier
      brand: 'WUXI',
      title: 'Men Knitted Loose Fit Shirt with Mandarin Collar',
      description: 'A comfortable and stylish shirt.',
      rating: 3.3,
      reviews: '4.5K',
      price: 480,
      originalPrice: 2399,
      discount: '80%',
      offerPrice: 359,
      images: {
        '	#2E8B57': [
          'https://assets.ajio.com/medias/sys_master/root/20231121/C6c3/655cdbefafa4cf41f596bcc7/-473Wx593H-466817674-seagreen-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231121/hnSt/655cdbefafa4cf41f596bc5f/-473Wx593H-466817674-seagreen-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231121/I0If/655cdbefafa4cf41f596bc5a/-473Wx593H-466817674-seagreen-MODEL4.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231121/I0If/655cdbefafa4cf41f596bc87/-1117Wx1400H-466817674-seagreen-MODEL4.jpg'
        ],
        'Red': [
          'https://assets.ajio.com/medias/sys_master/root/20231122/NfJN/655d573aafa4cf41f597c50d/-473Wx593H-466817674-red-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231122/He64/655d573aafa4cf41f597c4b2/-1117Wx1400H-466817674-red-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231122/3rM6/655d573aafa4cf41f597c4bc/-1117Wx1400H-466817674-red-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231122/k1kW/655d5741afa4cf41f597c582/-1117Wx1400H-466817674-red-MODEL5.jpg'
        ],
        'Black': [
          'https://assets.ajio.com/medias/sys_master/root/20231122/qLJJ/655d5750ddf779151993da57/-473Wx593H-466817674-black-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231122/9CK9/655d5750ddf779151993da01/-1117Wx1400H-466817674-black-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231122/4Pod/655d5750ddf779151993da04/-1117Wx1400H-466817674-black-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231122/ZF1V/655d5750ddf779151993da03/-1117Wx1400H-466817674-black-MODEL4.jpg'
        ],
        'White': [
          'https://assets.ajio.com/medias/sys_master/root/20231121/5RT6/655cde47ddf77915199314d4/-473Wx593H-466817674-white-MODEL.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231121/OReM/655cde47ddf7791519931486/-1117Wx1400H-466817674-white-MODEL2.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231121/eZY0/655cde47ddf7791519931498/-1117Wx1400H-466817674-white-MODEL3.jpg',
          'https://assets.ajio.com/medias/sys_master/root/20231121/HuoP/655cde47ddf7791519931483/-1117Wx1400H-466817674-white-MODEL4.jpg'
        ]
      },
      colors: ['	#2E8B57', 'Red', 'Black', 'White'],
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

