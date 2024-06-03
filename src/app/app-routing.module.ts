import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SellComponent } from './sell/sell.component';
import { DisplayComponent } from './display/display.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { CouponComponent } from './coupon/coupon.component';
import { NotesComponent } from './notes/notes.component';
import { GiftComponent } from './gift/gift.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './guard/auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { BlogComponent } from './blog/blog.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenComponent } from './men/men.component';
import { QuickViewModalComponent } from './quick-view-modal/quick-view-modal.component';
import { WomenenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeKitchenComponent } from './home-kitchen/home-kitchen.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: '', component: IntroVideoComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
 // {path:'best-sellers',component: BestSellersComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'cart' ,component:CartComponent},
  {path:'products' ,component:ProductsComponent},
  {path:'sell',component: SellComponent},
  {path:'display',component:DisplayComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'payment', component:PaymentComponent},
  {path:'confirm', component: ConfirmationComponent},
  //{path:'coupon', component:CouponComponent},
  {path:'notes',component:NotesComponent},
  {path:'gift', component:GiftComponent},
  {path:'game',component: GameComponent},
  { path: 'coupon', component: CouponComponent, canActivate: [AuthGuard] },
  { path: 'best-sellers', component: BestSellersComponent },
 //{ path: '**', redirectTo: '/game' },
 {path:'orders',component: OrdersComponent},
 {path:'blog', component: BlogComponent},
{path:'reset',component: ResetPasswordComponent},
{path:'home', component:HomeComponent},
// {path:'',redirectTo:'home',pathMatch:'full'},
{path:'header', component:HeaderComponent},
{path:'men',component: MenComponent},
{path:'quick-view',component:QuickViewModalComponent},
{path:'women', component: WomenenComponent},
{path:'kids', component:KidsComponent},
{path:'home-kitchen', component:HomeKitchenComponent},
{path:'subheader', component:SubheaderComponent},
{path:'sidebar', component: SidebarComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

