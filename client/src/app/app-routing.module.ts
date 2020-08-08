import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandsResolver } from './core/resolvers/brands.resolver';
import { CategoriesResolver } from './core/resolvers/categories.resolver';

const routes: Routes = [
  { 
    path: '', 
    component: AppComponent, 
    children: [
      { 
        path: 'shop', 
        loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule), 
        resolve: { brands: BrandsResolver, categories: CategoriesResolver } 
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
