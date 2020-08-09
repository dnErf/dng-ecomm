import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsResolver } from './core/resolvers/brands.resolver';
import { CategoriesResolver } from './core/resolvers/categories.resolver';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { 
    path: '',
    component: HomePage
  },
  { 
    path: 'shop', 
    loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule), 
    resolve: { brands: BrandsResolver, categories: CategoriesResolver } 
  },
  { 
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
