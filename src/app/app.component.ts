// import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { CookieService } from 'ngx-cookie-service';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'project';

//   constructor(
//     private translate: TranslateService,
//     private cookie: CookieService
//   ) {
//     this.useLanguage('en');
    
//   }

//   useLanguage(language: string) {
//     this.translate.use(language);
//   }
  
 
// }
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  currentRoute: string = '';

  constructor(
    private translate: TranslateService,
    private cookie: CookieService,
    private router: Router
  ) {
    this.useLanguage('en');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
