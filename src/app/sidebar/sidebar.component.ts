// import { Component, OnInit, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.scss']
// })
// export class SidebarComponent implements OnInit {
//   public sidebarShow: boolean = false;
//   public sidebarItems = [
//     // { path: 'best-sellers', name: 'Best sellers' },
//     {path: 'men',name:'Men'},
//     {path:'women', name:'Women'},
//     {path:'kids', name:'Kids'},
//     {path:'home-kitchen', name:'Home & Kitchen'},
//     { path: 'products', name: 'Shop by category' },
//     { path: 'sell', name: 'Sell your own products' },
//     { path: 'display', name: 'New Releases' },
//     { path: 'game', name: 'Win Games to get coupon codes' },
//     { path: 'notes', name: 'Notes' },
//     { path: 'gift', name: 'Gifts' },
//     {path:'orders',name:'Orders & Returns'},
//     {path:'blog', name: 'Blogs'},

//   ];

//   constructor() { }

//   ngOnInit(): void { }

//   toggleSidebar(): void {
//     this.sidebarShow = !this.sidebarShow;
//   }

//   @HostListener('document:click', ['$event'])
//   onOutsideClick(event: MouseEvent): void {
   
//     const targetElement = event.target as HTMLElement;
//     const sidebarElement = document.querySelector('.sidebar-slider');
//     const sidebarOpenerElement = document.querySelector('.sidebar-opener');
    
//     if (this.sidebarShow && sidebarElement && sidebarOpenerElement &&
//         !sidebarElement.contains(targetElement) && !sidebarOpenerElement.contains(targetElement)) {
//       this.sidebarShow = false;
//     }
//   }
// }
import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebarShow: boolean = false;
  public sidebarItems = [
    {path: 'men', name: 'Men'},
    {path: 'women', name: 'Women'},
    {path: 'kids', name: 'Kids'},
    {path: 'home-kitchen', name: 'Home & Kitchen'},
    { path: 'products', name: 'Shop by category' },
    { path: 'sell', name: 'Sell your own products' },
    { path: 'display', name: 'New Releases' },
    { path: 'game', name: 'Win Games to get coupon codes' },
    { path: 'notes', name: 'Notes' },
    { path: 'gift', name: 'Gifts' },
    {path: 'orders', name: 'Orders & Returns'},
    {path: 'blog', name: 'Blogs'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.sidebarShow = false;
      }
    });
  }

  toggleSidebar(): void {
    this.sidebarShow = !this.sidebarShow;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const sidebarElement = document.querySelector('.sidebar-slider');
    const sidebarOpenerElement = document.querySelector('.sidebar-opener');

    if (this.sidebarShow && sidebarElement && sidebarOpenerElement &&
        !sidebarElement.contains(targetElement) && !sidebarOpenerElement.contains(targetElement)) {
      this.sidebarShow = false;
    }
  }
}

   // 'Best Sellers',
    //'New Releases',
    //'Sell your own product',
    //'Ratings',
    //'Discount Sale',
    //'Blogs',
   // 'Coupon Codes',
   // 'Shop by Category',
   // 'Payment',
    //'My Orders & Returns',
   // 'Settings',
   // 'Help',
   // 'Sign in'
  //];

 