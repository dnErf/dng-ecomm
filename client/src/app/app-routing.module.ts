import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ---
import { BrandsResolver } from './core/resolvers/brands.resolver';
import { CategoriesResolver } from './core/resolvers/categories.resolver';
import { HomePage } from './pages/home/home.page';
import { NotFoundComponent } from './components/not-found.component';
import { ServerErrorComponent } from './components/server-error.component';

const routes: Routes = [
  { 
    path: '',
    component: HomePage
  },
  {
    path: 'account', 
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
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
    path: 'orders', 
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
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
