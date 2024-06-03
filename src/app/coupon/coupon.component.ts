// src/app/coupon/coupon.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {
  coupons = [
    {
      image: 'assets/coupon/coupon1.png',
      title: '30% OFF',
      description: 'Save 30% on your next purchase',
      code: 'ABCD'
    },
    {
      image: 'assets/coupon/coupon2.png',
      title: '10% OFF',
      description: '10% Off – Transform Your Wishlist Into Reality!',
      code: 'EFGH'
    },
    {
      image: 'assets/coupon/coupon3.png',
      title: '50% OFF',
      description: 'Half Price Happiness – 50% Off Storewide',
      code: 'IJKL'
    },
    
  ];

  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code).then(
      () => alert('Coupon code copied to clipboard!'),
      (err) => alert('Failed to copy the coupon code')
    );
  }
}
