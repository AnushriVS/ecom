// import { Component } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-reset-password',
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.scss']
// })
// export class ResetPasswordComponent {
//   username: string = '';
//   newPassword: string = '';

//   constructor(private cookieService: CookieService) {}

//   resetPassword() {
//     const storedUsername = this.cookieService.get('username');

//     if (this.username === storedUsername) {
//       this.cookieService.set('password', this.newPassword);
//       alert('Password reset successfully!');
//     } else {
//       alert('Username does not match our records.');
//     }
//   }
// }

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  username: string = '';
  newPassword: string = '';
  accounts: any[] = [];

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    const accounts = this.cookieService.get('accounts');
    if (accounts) {
      this.accounts = JSON.parse(accounts);
    }
  }

  resetPassword() {
    const accountIndex = this.accounts.findIndex(acc => acc.username === this.username);
    if (accountIndex !== -1) {
      this.accounts[accountIndex].password = this.newPassword;
      this.cookieService.set('accounts', JSON.stringify(this.accounts));
      alert('Password reset successfully!');
      this.username = '';
      this.newPassword = '';
    } else {
      alert('Username does not match our records.');
    }
  }
}
