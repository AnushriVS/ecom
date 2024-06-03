// import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { HomeKitchenModal1Component } from '../modal/home-kitchen/home-kitchen-modal1/home-kitchen-modal1.component';
// import { HomeKitchenModal2Component } from '../modal/home-kitchen/home-kitchen-modal2/home-kitchen-modal2.component';
// import { HomeKitchenModal3Component } from '../modal/home-kitchen/home-kitchen-modal3/home-kitchen-modal3.component';
// import { HomeKitchenModal4Component } from '../modal/home-kitchen/home-kitchen-modal4/home-kitchen-modal4.component';
// import { HomeKitchenModal5Component } from '../modal/home-kitchen/home-kitchen-modal5/home-kitchen-modal5.component';
// import { HomeKitchenModal6Component } from '../modal/home-kitchen/home-kitchen-modal6/home-kitchen-modal6.component';

// @Component({
//   selector: 'app-home-kitchen',
//   templateUrl: './home-kitchen.component.html',
//   styleUrl: './home-kitchen.component.scss'
// })
// export class HomeKitchenComponent implements OnInit {
//   gridSize: number = 4;
//   sortBy: string = 'Relevance';
//   totalItems: number = 4;
//   quickViewIndex: number | null = null;
//   sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];

//   products = [
//     {
//       id: 4001,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20231007/UfDJ/6520695dafa4cf41f530527b/-473Wx593H-466681313-white-MODEL.jpg',
//       title: 'Floor Lamp with Bulb',
//       description: ' HOMESAKE',
//       rating: 3.8,
//       reviews: 21,
//       price: 7000 ,
//       offerPrice: 2170,
//       discount: '69% off'
//     },
//     {
//       id: 4002,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20230628/j43b/649c0f72a9b42d15c91257c1/-1117Wx1400H-465922157-multi-MODEL.jpg',
//       title: 'Printed Cotton Door Curtain',
//       description: 'URBAN SPACE',
//       rating: 2.9,
//       reviews: 20,
//       price: 2499  ,
//       offerPrice: 975,
//       discount: '61% off'
//     },
//     {
//       id: 4003,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20230624/v4d8/649645d5a9b42d15c9d8aa2a/-473Wx593H-465144477-black-MODEL.jpg',
//       title: 'Set of 10 3D Collage Photo Frames',
//       description: 'RANDOM',
//       rating: 3.9,
//       reviews: 3,
//       price: 4248,
//       offerPrice: 1359,
//       discount: '68% off'
//     },
//     {
//       id: 4004,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20230705/9pLN/64a50e4deebac147fc4dff99/-1117Wx1400H-464730428-brown-MODEL.jpg',
//       title: 'Handwoven Conical Hanging Pendant Lamp',
//       description: 'EXCLUSIVELANE',
//       rating: 3.5,
//       reviews: 4,
//       price: 2675,
//       offerPrice: 1150,
//       discount: '57% off'
//     },
//     {
//       id: 4005,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20240109/49lX/659d761754c30e6276a0ab23/-1117Wx1400H-466967427-black-MODEL.jpg',
//       title: 'Quartz Silent Sweep Wall Clock',
//       description: 'NAUTICA',
//       rating: 4.5,
//       reviews: 14,
//       price: 2699 ,
//       offerPrice: 2294,
//       discount: '15% off'
//     },
//     {
//       id: 4006,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20231015/RV3l/652c1c7fddf77915193e06c5/-473Wx593H-466711577-grey-MODEL.jpg',
//       title: 'Artificial Plant with Ceramic Planter',
//       description: 'TAYHAA',
//       rating: 4.7,
//       reviews: 7,
//       price:4500  ,
//       offerPrice: 1800,
//       discount: '60% off'
//     }
    
//   ];

//   constructor(public dialog: MatDialog) { }

//   openQuickViewDialog(product: any, index: number): void {
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.height = '100%';
//     dialogConfig.width = '80%';
//     dialogConfig.data = { product };
//     dialogConfig.position = { top: '10%', left: '10%' };
//     dialogConfig.panelClass = 'custom-dialog-container';

//     let component: any;
//     if (product.id=== 4001) {
//        component = HomeKitchenModal1Component;
//     } else if (product.id=== 4002) {
//        component = HomeKitchenModal2Component ;
//     }
//     else if (product.id=== 4003) {
//        component = HomeKitchenModal3Component ;
//    }
//    else if (product.id=== 4004) {
//     component = HomeKitchenModal4Component ;
// }
// else if (product.id=== 4005) {
//   component = HomeKitchenModal5Component ;
// }
//    else{
//       component = HomeKitchenModal6Component ;
//  }
 

//     const dialogRef = this.dialog.open(component, dialogConfig);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }

//   ngOnInit(): void {
//     this.sortProducts(); // Ensure products are sorted on initialization
//   }

//   onGridSizeChange(size: number) {
//     this.gridSize = size;
//   }

//   showQuickViewOption(index: number) {
//     this.quickViewIndex = index;
//   }

//   hideQuickViewOption() {
//     this.quickViewIndex = null;
//   }

//   sortProducts() {
//     if (this.sortBy === 'Price: Low to High') {
//       this.products.sort((a, b) => a.price - b.price);
//     } else if (this.sortBy === 'Price: High to Low') {
//       this.products.sort((a, b) => b.price - a.price);
//     } else {
//       // Default sort logic (Relevance or other criteria)
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HomeKitchenModal1Component } from '../modal/home-kitchen/home-kitchen-modal1/home-kitchen-modal1.component';
import { HomeKitchenModal2Component } from '../modal/home-kitchen/home-kitchen-modal2/home-kitchen-modal2.component';
import { HomeKitchenModal3Component } from '../modal/home-kitchen/home-kitchen-modal3/home-kitchen-modal3.component';
import { HomeKitchenModal4Component } from '../modal/home-kitchen/home-kitchen-modal4/home-kitchen-modal4.component';
import { HomeKitchenModal5Component } from '../modal/home-kitchen/home-kitchen-modal5/home-kitchen-modal5.component';
import { HomeKitchenModal6Component } from '../modal/home-kitchen/home-kitchen-modal6/home-kitchen-modal6.component';

@Component({
  selector: 'app-home-kitchen',
  templateUrl: './home-kitchen.component.html',
  styleUrls: ['./home-kitchen.component.scss']
})
export class HomeKitchenComponent implements OnInit {
  gridSize: number = 4;
  sortBy: string = 'Relevance';
  totalItems: number = 4;
  quickViewIndex: number | null = null;
  sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];
  searchQuery: string = '';
  filteredProducts: any[] = [];

  products = [
    {
      id: 4001,
      image: 'https://assets.ajio.com/medias/sys_master/root/20231007/UfDJ/6520695dafa4cf41f530527b/-473Wx593H-466681313-white-MODEL.jpg',
      title: 'Floor Lamp with Bulb',
      description: 'HOMESAKE',
      rating: 3.8,
      reviews: 21,
      price: 7000,
      offerPrice: 2170,
      discount: '69% off'
    },
    {
      id: 4002,
      image: 'https://assets.ajio.com/medias/sys_master/root/20230628/j43b/649c0f72a9b42d15c91257c1/-1117Wx1400H-465922157-multi-MODEL.jpg',
      title: 'Printed Cotton Door Curtain',
      description: 'URBAN SPACE',
      rating: 2.9,
      reviews: 20,
      price: 2499,
      offerPrice: 975,
      discount: '61% off'
    },
    {
      id: 4003,
      image: 'https://assets.ajio.com/medias/sys_master/root/20230624/v4d8/649645d5a9b42d15c9d8aa2a/-473Wx593H-465144477-black-MODEL.jpg',
      title: 'Set of 10 3D Collage Photo Frames',
      description: 'RANDOM',
      rating: 3.9,
      reviews: 3,
      price: 4248,
      offerPrice: 1359,
      discount: '68% off'
    },
    {
      id: 4004,
      image: 'https://assets.ajio.com/medias/sys_master/root/20230705/9pLN/64a50e4deebac147fc4dff99/-1117Wx1400H-464730428-brown-MODEL.jpg',
      title: 'Handwoven Conical Hanging Pendant Lamp',
      description: 'EXCLUSIVELANE',
      rating: 3.5,
      reviews: 4,
      price: 2675,
      offerPrice: 1150,
      discount: '57% off'
    },
    {
      id: 4005,
      image: 'https://assets.ajio.com/medias/sys_master/root/20240109/49lX/659d761754c30e6276a0ab23/-1117Wx1400H-466967427-black-MODEL.jpg',
      title: 'Quartz Silent Sweep Wall Clock',
      description: 'NAUTICA',
      rating: 4.5,
      reviews: 14,
      price: 2699,
      offerPrice: 2294,
      discount: '15% off'
    },
    {
      id: 4006,
      image: 'https://assets.ajio.com/medias/sys_master/root/20231015/RV3l/652c1c7fddf77915193e06c5/-473Wx593H-466711577-grey-MODEL.jpg',
      title: 'Artificial Plant with Ceramic Planter',
      description: 'TAYHAA',
      rating: 4.7,
      reviews: 7,
      price: 4500,
      offerPrice: 1800,
      discount: '60% off'
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filterProducts(); 
    this.sortProducts(); 
    }

  onGridSizeChange(size: number) {
    this.gridSize = size;
  }

  showQuickViewOption(index: number) {
    this.quickViewIndex = index;
  }

  hideQuickViewOption() {
    this.quickViewIndex = null;
  }

  sortProducts() {
    if (this.sortBy === 'Price: Low to High') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'Price: High to Low') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      
    }
  }

  filterProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products];
    }
    this.totalItems = this.filteredProducts.length;
    this.sortProducts(); // Ensure products are sorted after filtering
  }

  openQuickViewDialog(product: any, index: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '100%';
    dialogConfig.width = '80%';
    dialogConfig.data = { product };
    dialogConfig.position = { top: '10%', left: '10%' };
    dialogConfig.panelClass = 'custom-dialog-container';

    let component: any;
    if (product.id === 4001) {
      component = HomeKitchenModal1Component;
    } else if (product.id === 4002) {
      component = HomeKitchenModal2Component;
    } else if (product.id === 4003) {
      component = HomeKitchenModal3Component;
    } else if (product.id === 4004) {
      component = HomeKitchenModal4Component;
    } else if (product.id === 4005) {
      component = HomeKitchenModal5Component;
    } else {
      component = HomeKitchenModal6Component;
    }

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
