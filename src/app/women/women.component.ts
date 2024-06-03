// import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { WomenModal1Component } from '../modal/women-modal1/women-modal1.component';
// import { WomenModal2Component } from '../modal/women-modal2/women-modal2.component';
// import { WomenModal3Component } from '../modal/women-modal3/women-modal3.component';
// import { WomenModal4Component } from '../modal/women-modal4/women-modal4.component';


// @Component({
//   selector: 'app-women',
//   templateUrl: './women.component.html',
//   styleUrls: ['./women.component.scss']
// })
// export class WomenenComponent implements OnInit {
//   gridSize: number = 4;
//   sortBy: string = 'Relevance';
//   totalItems: number = 4;
//   quickViewIndex: number | null = null;
//   sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];

//   products = [
//     {
//       id: 2001,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20240315/mEp8/65f385c016fd2c6e6a5ef717/-473Wx593H-467167529-pink-MODEL.jpg',
//       title: 'Women Floral Print V-Neck Straight Kurta',
//       description: 'FASHOR',
//       rating: 3.9,
//       reviews: 12,
//       price: 2499,
//       offerPrice: 975,
//       discount: '61% off'
//     },
//     {
//       id: 2002,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20231130/7lDz/65679651afa4cf41f5a90c66/-1117Wx1400H-466746568-offwhite-MODEL2.jpg',
//       title: 'Women Floral Print A-Line Kurta Set',
//       description: 'FASHOR',
//       rating: 4.0,
//       reviews: 12,
//       price: 1710,
//       offerPrice: 3799,
//       discount: '55% OFF'
//     },
//     {
//       id: 2003,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20240416/B6So/661ec3ea05ac7d77bb11b2ee/-473Wx593H-467229217-violet-MODEL.jpg',
//       title: 'Stripes Straight Kurta',
//       description: 'SHAILY',
//       rating: 3.2,
//       reviews: 11,
//       price: 738,
//       offerPrice: 310,
//       discount: '58% OFF'
//     },
//     {
//       id: 2004,
//       image: 'https://assets.ajio.com/medias/sys_master/root/20230605/KodM/647e25f342f9e729d725ab22/-473Wx593H-443017341-peach-MODEL.jpg',
//       title: 'Foil Print Flared Kurta',
//       description: 'AVAASA MIX N MATCH',
//       rating: 3.7,
//       reviews: 4,
//       price: 1849,
//       offerPrice: 961,
//       discount: '48% OFF'
//     },
    
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
//     if (product.id === 2001) {
//       component = WomenModal1Component;
//     } else if (product.id === 2002) {
//        component = WomenModal2Component ;
//     }
//     else if (product.id === 2003) {
//      component= WomenModal3Component
//    }
//    else if (product.id === 2001) {
//      component= WomenModal4Component
//  }
//  else if (index === 4) {
//   // component = MenModal5Component ;
// }
//   else {
//       //  component = MenModal6Component;
//     }

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
import { WomenModal1Component } from '../modal/women-modal1/women-modal1.component';
import { WomenModal2Component } from '../modal/women-modal2/women-modal2.component';
import { WomenModal3Component } from '../modal/women-modal3/women-modal3.component';
import { WomenModal4Component } from '../modal/women-modal4/women-modal4.component';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenenComponent implements OnInit {
  gridSize: number = 4;
  sortBy: string = 'Relevance';
  totalItems: number = 4;
  quickViewIndex: number | null = null;
  sortOptions: string[] = ['', 'Price: Low to High', 'Price: High to Low'];
  searchQuery: string = '';
  filteredProducts: any[] = [];

  products = [
    {
      id: 2001,
      image: 'https://assets.ajio.com/medias/sys_master/root/20240315/mEp8/65f385c016fd2c6e6a5ef717/-473Wx593H-467167529-pink-MODEL.jpg',
      title: 'Women Floral Print V-Neck Straight Kurta',
      description: 'FASHOR',
      rating: 3.9,
      reviews: 12,
      price: 2499,
      offerPrice: 975,
      discount: '61% off'
    },
    {
      id: 2002,
      image: 'https://assets.ajio.com/medias/sys_master/root/20231130/7lDz/65679651afa4cf41f5a90c66/-1117Wx1400H-466746568-offwhite-MODEL2.jpg',
      title: 'Women Floral Print A-Line Kurta Set',
      description: 'FASHOR',
      rating: 4.0,
      reviews: 12,
      price: 1710,
      offerPrice: 3799,
      discount: '55% OFF'
    },
    {
      id: 2003,
      image: 'https://assets.ajio.com/medias/sys_master/root/20240416/B6So/661ec3ea05ac7d77bb11b2ee/-473Wx593H-467229217-violet-MODEL.jpg',
      title: 'Stripes Straight Kurta',
      description: 'SHAILY',
      rating: 3.2,
      reviews: 11,
      price: 738,
      offerPrice: 310,
      discount: '58% OFF'
    },
    {
      id: 2004,
      image: 'https://assets.ajio.com/medias/sys_master/root/20230605/KodM/647e25f342f9e729d725ab22/-473Wx593H-443017341-peach-MODEL.jpg',
      title: 'Foil Print Flared Kurta',
      description: 'AVAASA MIX N MATCH',
      rating: 3.7,
      reviews: 4,
      price: 1849,
      offerPrice: 961,
      discount: '48% OFF'
    }
  ];

  constructor(public dialog: MatDialog) { }

  openQuickViewDialog(product: any, index: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '100%';
    dialogConfig.width = '80%';
    dialogConfig.data = { product };
    dialogConfig.position = { top: '10%', left: '10%' };
    dialogConfig.panelClass = 'custom-dialog-container';

    let component: any;
    if (product.id === 2001) {
      component = WomenModal1Component;
    } else if (product.id === 2002) {
      component = WomenModal2Component;
    } else if (product.id === 2003) {
      component = WomenModal3Component;
    } else if (product.id === 2004) {
      component = WomenModal4Component;
    } else {
      
    }

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

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
}
