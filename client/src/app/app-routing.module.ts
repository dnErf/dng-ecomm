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
    path: 'account', 
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  { 
    path: 'basket', 
    loadChildren: () => import('./pages/basket/basket.module').then(m => m.BasketModule)
  },
  { 
    path: 'shop', 
    loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule), 
    resolve: { brands: BrandsResolver, categories: CategoriesResolver }
  },
  {
    path: 'server-error', 
    component: ServerErrorComponent
  },
  {
    path: 'not-found', 
    component: NotFoundComponent, 
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
