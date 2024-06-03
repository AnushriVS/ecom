import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';
import { SharedService } from '../shared.service';

declare global {
  interface Window {
    paypal: any;
  }
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  amount = 0;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(
    private router: Router, 
    private payment: PaymentService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.currentGrandTotal.subscribe(grandTotal => {
      this.amount = grandTotal;
      console.log('Updated amount:', this.amount);

      
      if (this.paymentRef.nativeElement.innerHTML === '') {
        this.renderPaypalButtons();
      }
    });
  }

  renderPaypalButtons() {
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount.toString(),
                  currency_code: 'USD'
                }
              }
            ]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status === 'COMPLETED') {
              this.payment.transactionID = details.id;
              this.router.navigate(['confirm']);
            }
          });
        },
        onError: (error: any) => {
          console.log(error);
        }
      }
    ).render(this.paymentRef.nativeElement);
  }

  cancel() {
    this.router.navigate(['cart']);
  }

}
