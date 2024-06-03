// import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { KidsModal1Component } from '../modal/kids/kids-modal1/kids-modal1.component';
// import { KidsModal2Component } from '../modal/kids/kids-modal2/kids-modal2.component';
// import { KidsModal3Component } from '../modal/kids/kids-modal3/kids-modal3.component';
// import { KidsModal4Component } from '../modal/kids/kids-modal4/kids-modal4.component';


// @Component({
//   selector: 'app-kids',
//   templateUrl: './kids.component.html',
//   styleUrls: ['./kids.component.scss']
// })
// export class KidsComponent implements OnInit {
//   gridSize: number = 4;
//   sortBy: string = 'Relevance';
//   totalItems: number = 4;
//   quickViewIndex: number | null = null;
//   sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];

//   products = [
//     {
//       id: 3001,
//       image: 'https://assets.ajio.com/medias/sys_master/root/hd4/h61/13607078002718/-473Wx593H-460336484-green-MODEL.jpg',
//       title: 'Panelled Woven Jacket with Hood',
//       description: 'FORTUNE FORGE',
//       rating: 4.8,
//       reviews: 12,
//       price: 2298,
//       offerPrice: 1149,
//       discount: '50% off'
//     },
//     {
//       id: 3002,
//       image: 'https://assets.ajio.com/medias/sys_master/root/h4f/h48/12062444781598/-473Wx593H-460198713-indigo-MODEL.jpg',
//       title: 'Tie & Dye A-line Dress with Embroidery',
//       description: 'FORTUNE FORGE',
//       rating: 5.0,
//       reviews: 20,
//       price: 1599 ,
//       offerPrice: 320,
//       discount: '80% off'
//     },
//     {
//       id: 3003,
//       image: 'https://assets.ajio.com/medias/sys_master/root/h03/h7b/14408135475230/-1117Wx1400H-460425269-black-MODEL.jpg',
//       title: 'Graphic Print Top',
//       description: 'FORTUNE FORGE',
//       rating: 3.9,
//       reviews: 30,
//       price: 700,
//       offerPrice: 595,
//       discount: '15% off'
//     },
//     {
//       id: 3004,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20230602/lzVo/647955c9d55b7d0c633b9305/-473Wx593H-462198876-multi-MODEL.jpg',
//       title: 'Graphic Print Top',
//       description: 'CAPTAIN MARVEL',
//       rating: 3.5,
//       reviews: 4,
//       price: 899,
//       offerPrice: 450,
//       discount: '50% off'
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
//     if (product.id=== 3001) {
//        component = KidsModal1Component;
//     } else if (product.id=== 3002) {
//       component = KidsModal2Component ;
//     }
//     else if (product.id=== 3003) {
//        component = KidsModal3Component ;
//    }
//    else{
//      component = KidsModal4Component ;
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
import { KidsModal1Component } from '../modal/kids/kids-modal1/kids-modal1.component';
import { KidsModal2Component } from '../modal/kids/kids-modal2/kids-modal2.component';
import { KidsModal3Component } from '../modal/kids/kids-modal3/kids-modal3.component';
import { KidsModal4Component } from '../modal/kids/kids-modal4/kids-modal4.component';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {
  gridSize: number = 4;
  sortBy: string = 'Relevance';
  totalItems: number = 4;
  quickViewIndex: number | null = null;
  sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];
  searchQuery: string = '';
  filteredProducts: any[] = [];

  products = [
    {
      id: 3001,
      image: 'https://assets.ajio.com/medias/sys_master/root/hd4/h61/13607078002718/-473Wx593H-460336484-green-MODEL.jpg',
      title: 'Panelled Woven Jacket with Hood',
      description: 'FORTUNE FORGE',
      rating: 4.8,
      reviews: 12,
      price: 2298,
      offerPrice: 1149,
      discount: '50% off'
    },
    {
      id: 3002,
      image: 'https://assets.ajio.com/medias/sys_master/root/h4f/h48/12062444781598/-473Wx593H-460198713-indigo-MODEL.jpg',
      title: 'Tie & Dye A-line Dress with Embroidery',
      description: 'FORTUNE FORGE',
      rating: 5.0,
      reviews: 20,
      price: 1599 ,
      offerPrice: 320,
      discount: '80% off'
    },
    {
      id: 3003,
      image: 'https://assets.ajio.com/medias/sys_master/root/h03/h7b/14408135475230/-1117Wx1400H-460425269-black-MODEL.jpg',
      title: 'Graphic Print Top',
      description: 'FORTUNE FORGE',
      rating: 3.9,
      reviews: 30,
      price: 700,
      offerPrice: 595,
      discount: '15% off'
    },
    {
      id: 3004,
      image: 'https://assets.ajio.com/medias/sys_master/root/20230602/lzVo/647955c9d55b7d0c633b9305/-473Wx593H-462198876-multi-MODEL.jpg',
      title: 'Graphic Print Top',
      description: 'CAPTAIN MARVEL',
      rating: 3.5,
      reviews: 4,
      price: 899,
      offerPrice: 450,
      discount: '50% off'
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
    this.sortProducts(); 
  }

  openQuickViewDialog(product: any, index: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '100%';
    dialogConfig.width = '80%';
    dialogConfig.data = { product };
    dialogConfig.position = { top: '10%', left: '10%' };
    dialogConfig.panelClass = 'custom-dialog-container';

    let component: any;
    if (product.id === 3001) {
      component = KidsModal1Component;
    } else if (product.id === 3002) {
      component = KidsModal2Component;
    } else if (product.id === 3003) {
      component = KidsModal3Component;
    } else {
      component = KidsModal4Component;
    }

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
