import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from './shared.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterPipe} from './shared/filter.pipe';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SellComponent } from './sell/sell.component';
import { DisplayComponent } from './display/display.component';
import { CookieService } from 'ngx-cookie-service';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { CouponComponent } from './coupon/coupon.component';
import { NotesComponent } from './notes/notes.component';
import{DropdownModule} from 'primeng/dropdown';
import { GiftComponent } from './gift/gift.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './service/order.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { DatePipe } from '@angular/common';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './guard/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { QuickViewModalComponent } from './quick-view-modal/quick-view-modal.component';
import { MenModal2Component } from './modal/men-modal2/men-modal2.component';
import { MenModal3Component } from './modal/men-modal3/men-modal3.component';
import { MenModal4Component } from './modal/men-modal4/men-modal4.component';
import { MenModal5Component } from './modal/men-modal5/men-modal5.component';
import { MenModal6Component } from './modal/men-modal6/men-modal6.component';
import { WomenenComponent } from './women/women.component';
import { WomenModal1Component } from './modal/women-modal1/women-modal1.component';
import { WomenModal2Component } from './modal/women-modal2/women-modal2.component';
import { WomenModal3Component } from './modal/women-modal3/women-modal3.component';
import { WomenModal4Component } from './modal/women-modal4/women-modal4.component';
import { KidsModal1Component } from './modal/kids/kids-modal1/kids-modal1.component';
import { KidsModal2Component } from './modal/kids/kids-modal2/kids-modal2.component';
import { KidsModal3Component } from './modal/kids/kids-modal3/kids-modal3.component';
import { KidsModal4Component } from './modal/kids/kids-modal4/kids-modal4.component';
import { KidsComponent } from './kids/kids.component';
import { HomeKitchenModal1Component } from './modal/home-kitchen/home-kitchen-modal1/home-kitchen-modal1.component';
import { HomeKitchenModal2Component } from './modal/home-kitchen/home-kitchen-modal2/home-kitchen-modal2.component';
import { HomeKitchenModal3Component } from './modal/home-kitchen/home-kitchen-modal3/home-kitchen-modal3.component';
import { HomeKitchenModal4Component } from './modal/home-kitchen/home-kitchen-modal4/home-kitchen-modal4.component';
import { HomeKitchenModal5Component } from './modal/home-kitchen/home-kitchen-modal5/home-kitchen-modal5.component';
import { HomeKitchenModal6Component } from './modal/home-kitchen/home-kitchen-modal6/home-kitchen-modal6.component';
import { HomeKitchenComponent } from './home-kitchen/home-kitchen.component';









export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    SidebarComponent,
    SignInComponent,
    BestSellersComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    SellComponent,
    DisplayComponent,
    CreateAccountComponent,
    PaymentComponent,
    ConfirmationComponent,
    IntroVideoComponent,
    CouponComponent,
    NotesComponent,
    GiftComponent,
    OrdersComponent,
    GameComponent,
    BlogComponent,
    ResetPasswordComponent,
    HomeComponent,
    MenComponent,
    QuickViewModalComponent,
    MenModal2Component,
    MenModal3Component,
    MenModal4Component,
    MenModal5Component,
    MenModal6Component,
    WomenenComponent,
    WomenModal1Component,
    WomenModal2Component,
    WomenModal3Component,
    WomenModal4Component,
    KidsModal1Component,
    KidsModal2Component,
    KidsModal3Component,
    KidsModal4Component,
    KidsComponent,
    HomeKitchenModal1Component,
    HomeKitchenModal2Component,
    HomeKitchenModal3Component,
    HomeKitchenModal4Component,
    HomeKitchenModal5Component,
    HomeKitchenModal6Component,
    HomeKitchenComponent
    
  ],

  imports: [
    MatButtonModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) 
  ], 
  providers: [
  SharedService,CookieService, provideAnimationsAsync(), OrderService,DatePipe,
    AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule {}
