import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotFComponent } from './components/not-f/not-f.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ForgetPComponent } from './components/forget-p/forget-p.component';
import { CodeRComponent } from './components/code-r/code-r.component';
import { ResetPComponent } from './components/reset-p/reset-p.component';
import { ProductDetilsComponent } from './components/product-detils/product-detils.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderCategoriesComponent } from './components/slider-categories/slider-categories.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SliderComponent } from './components/slider/slider.component';
import { TrimPipe } from './pipes/trim.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    NotFComponent,
    WishListComponent,
    ForgetPComponent,
    CodeRComponent,
    ResetPComponent,
    ProductDetilsComponent,
    SliderCategoriesComponent,
    MainSliderComponent,
    SliderComponent,
    TrimPipe,
    SearchPipe,
    CheckOutComponent,
    AllordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
