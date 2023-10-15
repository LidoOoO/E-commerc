import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotFComponent } from './components/not-f/not-f.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { authGuard } from 'src/core/guards/auth.guard';
import { authDGuard } from 'src/core/guards/auth-d.guard';
import { ForgetPComponent } from './components/forget-p/forget-p.component';
import { CodeRComponent } from './components/code-r/code-r.component';
import { ResetPComponent } from './components/reset-p/reset-p.component';
import { ProductDetilsComponent } from './components/product-detils/product-detils.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllordersComponent } from './components/allorders/allorders.component';



const routes: Routes = [
{path:"",redirectTo:"home",pathMatch:"full"},

{path:"home",canActivate:[authGuard],component:HomeComponent,title:"Home"},
{path:"products",canActivate:[authGuard],component:ProductsComponent,title:"Products"},
{path:"cart",canActivate:[authGuard],component:CartComponent,title:"cart"},
{path:"brands",canActivate:[authGuard],component:BrandsComponent,title:"Brands"},
{path:"categories",canActivate:[authGuard],component:CategoriesComponent,title:"Categories"},
{path:"wishList",canActivate:[authGuard],component:WishListComponent,title:"Wish List"},
{path:"productdetils/:id",canActivate:[authGuard],component:ProductDetilsComponent,title:"Product Detils"},
{path:"cheakOut",canActivate:[authGuard],component:CheckOutComponent,title:"cheak Out"},
{path:"allorders",canActivate:[authGuard],component:AllordersComponent,title:"allorders"},


{path:"coder",canActivate:[authDGuard],component:CodeRComponent,title:"Reset Code"},
{path:"resetP",canActivate:[authDGuard],component:ResetPComponent,title:"Reset Password"},
{path:"forgetP",canActivate:[authDGuard],component:ForgetPComponent,title:"forget password"},
{path:"register",canActivate:[authDGuard],component:RegisterComponent,title:"Register"},
{path:"login",canActivate:[authDGuard],component:LoginComponent,title:"Log In"},
{path:"**",component:NotFComponent,title:"Not found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
