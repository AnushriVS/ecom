// import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { QuickViewModalComponent } from '../quick-view-modal/quick-view-modal.component';
// import { MenModal2Component } from '../modal/men-modal2/men-modal2.component';
// import { MenModal3Component } from '../modal/men-modal3/men-modal3.component';
// import { MenModal4Component } from '../modal/men-modal4/men-modal4.component';
// import { MenModal5Component } from '../modal/men-modal5/men-modal5.component';
// import { MenModal6Component } from '../modal/men-modal6/men-modal6.component';


// @Component({
//   selector: 'app-men',
//   templateUrl: './men.component.html',
//   styleUrls: ['./men.component.scss']
// })
// export class MenComponent implements OnInit {
//   gridSize: number = 4;
//   sortBy: string = 'Relevance';
//   totalItems: number = 6;
//   quickViewIndex: number | null = null;
//   sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];

  // products = [
  //   {
  //     image: 'https://assets.ajio.com/medias/sys_master/root/20231121/C6c3/655cdbefafa4cf41f596bcc7/-473Wx593H-466817674-seagreen-MODEL.jpg',
  //     title: 'Men Knitted Loose Fit Shirt with Mandarin Collar',
  //     description: 'WUXI',
  //     rating: 3.5,
  //     reviews: 12,
  //     price: 480,
  //     offerPrice: 20,
  //     discount: '76% off'
  //   },
  //   {
  //     image: 'https://assets.ajio.com/medias/sys_master/root/20240312/5I5L/65f040f516fd2c6e6a522ce7/-1117Wx1400H-467160873-cream-MODEL.jpg',
  //     title: 'Men Floral Print Regular Fit Shirt',
  //     description: 'VOOTER',
  //     rating: 4.0,
  //     reviews: 18,
  //     price: 744,
  //     offerPrice: 651,
  //     discount: '76% off'
  //   },
  //   {
  //     image: 'https://assets.ajio.com/medias/sys_master/root/20240312/TLIF/65f0404216fd2c6e6a521a5e/-1117Wx1400H-467160486-blue-MODEL.png',
  //     title: 'Men Striped Regular Fit Shirt',
  //     description: 'DEAIM',
  //     rating: 2.8,
  //     reviews: 14,
  //     price: 1750,
  //     offerPrice: 1500,
  //     discount: '85% off'
  //   },
  //   {
  //     image: 'https://assets.ajio.com/medias/sys_master/root/20240305/3xms/65e7499b16fd2c6e6a3d87bc/-1117Wx1400H-467125560-teal-MODEL.jpg',
  //     title: 'Men Regular Fit Shirt with Spread Collar',
  //     description: 'GESPO',
  //     rating: 3.5,
  //     reviews: 4,
  //     price: 1499,
  //     offerPrice: 420,
  //     discount: '72% off'
  //   },
  //   {
  //     image: 'https://assets.ajio.com/medias/sys_master/root/20230525/QgJU/646ee61c42f9e729d7bbfd33/-1117Wx1400H-464734590-mustard-MODEL.jpg',
  //     title: 'Solid Shirt with Patch Pocket',
  //     description: 'THE BEAR HOUSE',
  //     rating: 3.6,
  //     reviews: 20,
  //     price: 2495,
  //     offerPrice: 1248,
  //     discount: '50% OFF'
  //   },
  //   {
  //     image: 'https://assets.ajio.com/medias/sys_master/root/20231205/LBwK/656ed464afa4cf41f5b4f71c/-473Wx593H-462323964-white-MODEL.jpg',
  //     title: 'Full Sleeves Slim Fit Shirt',
  //     description: 'DENNISLINGO PREMIUM ATTIRE',
  //     rating: 3.6,
  //     reviews: 14,
  //     price: 1049,
  //     offerPrice: 647,
  //     discount: '65% OFF'
  //   },
    
  // ];

//   constructor(public dialog: MatDialog) { }

//   openQuickViewDialog(product: any, index: number): void {
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.height = '100%';
//     dialogConfig.width = '80%';
//     dialogConfig.data = { product };
//     dialogConfig.position = { top: '10%', left: '10%' };
//     dialogConfig.panelClass = 'custom-dialog-container';

//     let component: any;
//     if (index === 0) {
//       component = QuickViewModalComponent;
//     } else if (index === 1) {
//        component = MenModal2Component ;
//     }
//     else if (index === 2) {
//       component = MenModal3Component ;
//    }
//    else if (index === 3) {
//     component = MenModal4Component ;
//  }
//  else if (index === 4) {
//   component = MenModal5Component ;
// }
//   else {
//        component = MenModal6Component;
//     }

//     const dialogRef = this.dialog.open(component, dialogConfig);

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }

//   ngOnInit(): void {
//     this.sortProducts(); 
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
//       'Sort'
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuickViewModalComponent } from '../quick-view-modal/quick-view-modal.component';
import { MenModal2Component } from '../modal/men-modal2/men-modal2.component';
import { MenModal3Component } from '../modal/men-modal3/men-modal3.component';
import { MenModal4Component } from '../modal/men-modal4/men-modal4.component';
import { MenModal5Component } from '../modal/men-modal5/men-modal5.component';
import { MenModal6Component } from '../modal/men-modal6/men-modal6.component';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {
  gridSize: number = 4;
  sortBy: string = 'Relevance';
  searchKey: string = '';
  quickViewIndex: number | null = null;
  sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];
  products = [
    {
      id: 1001,
      image: 'https://assets.ajio.com/medias/sys_master/root/20231121/C6c3/655cdbefafa4cf41f596bcc7/-473Wx593H-466817674-seagreen-MODEL.jpg',
      title: 'Men Knitted Loose Fit Shirt with Mandarin Collar',
      description: 'WUXI',
      rating: 3.5,
      reviews: 12,
      price: 480,
      offerPrice: 20,
      discount: '76% off'
    },
    {
      id: 1002,
      image: 'https://assets.ajio.com/medias/sys_master/root/20240312/5I5L/65f040f516fd2c6e6a522ce7/-1117Wx1400H-467160873-cream-MODEL.jpg',
      title: 'Men Floral Print Regular Fit Shirt',
      description: 'VOOTER',
      rating: 4.0,
      reviews: 18,
      price: 744,
      offerPrice: 651,
      discount: '76% off'
    },
    {
      id: 1003,
      image: 'https://assets.ajio.com/medias/sys_master/root/20240312/TLIF/65f0404216fd2c6e6a521a5e/-1117Wx1400H-467160486-blue-MODEL.png',
      title: 'Men Striped Regular Fit Shirt',
      description: 'DEAIM',
      rating: 2.8,
      reviews: 14,
      price: 1750,
      offerPrice: 1500,
      discount: '85% off'
    },
    {
      id: 1004,
      image: 'https://assets.ajio.com/medias/sys_master/root/20240305/3xms/65e7499b16fd2c6e6a3d87bc/-1117Wx1400H-467125560-teal-MODEL.jpg',
      title: 'Men Regular Fit Shirt with Spread Collar',
      description: 'GESPO',
      rating: 3.5,
      reviews: 4,
      price: 1499,
      offerPrice: 420,
      discount: '72% off'
    },
    {
      id: 1005,
      image: 'https://assets.ajio.com/medias/sys_master/root/20230525/QgJU/646ee61c42f9e729d7bbfd33/-1117Wx1400H-464734590-mustard-MODEL.jpg',
      title: 'Solid Shirt with Patch Pocket',
      description: 'THE BEAR HOUSE',
      rating: 3.6,
      reviews: 20,
      price: 2495,
      offerPrice: 1248,
      discount: '50% OFF'
    },
    {
      id: 1006,
      image: 'https://assets.ajio.com/medias/sys_master/root/20231205/LBwK/656ed464afa4cf41f5b4f71c/-473Wx593H-462323964-white-MODEL.jpg',
      title: 'Full Sleeves Slim Fit Shirt',
      description: 'DENNISLINGO PREMIUM ATTIRE',
      rating: 3.6,
      reviews: 14,
      price: 1049,
      offerPrice: 647,
      discount: '65% OFF'
    },
    
  ];
  filteredProducts = [...this.products];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filterProducts();
  }

  filterProducts() {
    if (this.searchKey) {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchKey.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchKey.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  onSearchChange() {
    this.filterProducts();
  }

  onGridSizeChange(size: number) {
    this.gridSize = size;
  }

  sortProducts() {
    if (this.sortBy === 'Price: Low to High') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'Price: High to Low') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  openQuickViewDialog(product: any, index: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '100%';
    dialogConfig.width = '80%';
    dialogConfig.data = { product };
    dialogConfig.position = { top: '10%', left: '10%' };
    dialogConfig.panelClass = 'custom-dialog-container';

    let component: any;
    if (product.id=== 1001) {
      component = QuickViewModalComponent;
    } else if (product.id=== 1002) {
      component = MenModal2Component;
    } else if (product.id=== 1003) {
      component = MenModal3Component;
    } else if (product.id=== 1004) {
      component = MenModal4Component;
    } else if (product.id=== 1005) {
      component = MenModal5Component;
    } else {
      component = MenModal6Component;
    }

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
    });
  }

  showQuickViewOption(index: number) {
    this.quickViewIndex = index;
  }

  hideQuickViewOption() {
    this.quickViewIndex = null;
  }
}
