
// import { Component } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-create-account',
//   templateUrl: './create-account.component.html',
//   styleUrls: ['./create-account.component.scss']
// })
// export class CreateAccountComponent {
//   username: string = '';
//   password: string = '';
//   accounts: any[] = [];

//   constructor(private cookieService: CookieService) {}

//   ngOnInit() {
//     const accounts = this.cookieService.get('accounts');
//     if (accounts) {
//       this.accounts = JSON.parse(accounts);
//     }
//   }

//   createAccount() {
//     if (this.username && this.password) {
//       const newAccount = { username: this.username, password: this.password };
//       this.accounts.push(newAccount);
//       this.cookieService.set('accounts', JSON.stringify(this.accounts));
//       alert('Account created successfully!');
//       this.username = '';
//       this.password = '';
//     } else {
//       alert('Please enter a username and password');
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  username: string = '';
  password: string = '';
  accounts: any[] = [];

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    const accounts = this.cookieService.get('accounts');
    if (accounts) {
      this.accounts = JSON.parse(accounts);
    }
  }

  createAccount() {
    if (this.username && this.password) {
      const newAccount = { username: this.username, password: this.password };
      this.accounts.push(newAccount);
      this.cookieService.set('accounts', JSON.stringify(this.accounts));
      alert('Account created successfully!');
      this.router.navigate(['/sign-in']);
    } else {
      alert('Please enter a username and password');
    }
  }
}
