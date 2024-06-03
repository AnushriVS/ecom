
// import { Component } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { TranslateService } from '@ngx-translate/core';
// import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.scss']
// })
// export class SignInComponent {
//   constructor(
//     public dialogRef: MatDialogRef<SignInComponent>,
//     private translate: TranslateService,
//     private cookieService: CookieService,
//     private router: Router
//   ) {
//     this.useLanguage('en');
//   }

//   closeDialog(): void {
//     this.dialogRef.close();
//   }

//   useLanguage(language: string) {
//     this.translate.use(language);
//   }

//   signIn() {
//     const username = this.cookieService.get('username');
//     const password = this.cookieService.get('password');

//     const inputUsername = (document.getElementById('username') as HTMLInputElement).value;
//     const inputPassword = (document.getElementById('password') as HTMLInputElement).value;
//     if (inputUsername === username && inputPassword === password) {
//       alert('Sign in successful');
//     } else {
//       alert('Sign in failed. Invalid username or password.');
//     }
//   }

//   signUp() {
//     this.router.navigate(['/create-account']);
//   }

//   forgotPassword(){
//     this.router.navigate(['/reset']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  inputUsername: string = '';
  inputPassword: string = '';
  accounts: any[] = [];
  
  constructor(
    private router: Router,
    private translate: TranslateService,
    private cookieService: CookieService,
    public dialogRef: MatDialogRef<SignInComponent>
  ) {
    this.useLanguage('en');
  }

  ngOnInit() {
    const accounts = this.cookieService.get('accounts');
    if (accounts) {
      this.accounts = JSON.parse(accounts);
    }
  }

  // closeDialog(): void {
  //   // included this prevent closing the dialog if the user is not signing in 
  // }

    closeDialog(): void {
     this.dialogRef.close();
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  signIn() {
    const account = this.accounts.find(acc => acc.username === this.inputUsername && acc.password === this.inputPassword);
    if (account) {
      alert('Sign in successful');
      this.dialogRef.close('success');
      this.router.navigate(['/home']);
    } else {
      alert('Sign in failed. Invalid username or password.');
    }
  }

  forgotPassword() {
    this.router.navigate(['/reset']);
  }

  signUp() {
    this.router.navigate(['/create-account']);
  }
}

