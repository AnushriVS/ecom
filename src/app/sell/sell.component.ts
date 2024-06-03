import { Component } from '@angular/core';
import { FormDataService } from '../service/form-data.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {
formData: any={
  productName:'',
  productImage: null,
  productPrice: 0
};
submittedProducts: any[]=[];
formSubmitted: boolean = false;
  constructor(private formDataService: FormDataService,private router: Router,private cookieService: CookieService) {} 

  submitForm() {
    this.formSubmitted = true;
    this.formDataService.storeSubmittedData(this.formData);
    //this.router.navigate(['/display']);
    this.cookieService.set('submittedProduct', JSON.stringify(this.formData));
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    // u added this to have preview okva
    const reader = new FileReader();
    reader.onload = () => {
      this.formData.productImage = reader.result;
    };
    reader.readAsDataURL(file);
  }

  navigateToDisplay() {
    this.router.navigate(['/display']);
  }

}