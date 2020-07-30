import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListResolver } from './core/resolvers/product-list.resolver';

const routes: Routes = [
  { 
    path: '', 
    component: AppComponent, 
    resolve: { products: ProductListResolver },
    children: [
      { 
        path: 'shop', 
        loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule), 
        resolve: { data: ProductListResolver } 
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
