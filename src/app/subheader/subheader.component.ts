import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { CartService } from '../service/cart.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit{


  public totalItem : number =0;
//this one
  public searchTerm :string='';

  constructor(private dialog: MatDialog, private cartService: CartService,private translate: TranslateService) 
  {  
    this.useLanguage('en')
  
}
  openSignInDialog(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '400px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  counter = 0;
  increment() {
    this.counter++;
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length;

    })
  }
//this one
  search(event: any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }


  useLanguage(language: string) {
    this.translate.use(language);
  }
  
  
}