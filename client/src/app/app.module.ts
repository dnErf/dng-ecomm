import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandsResolver } from 'src/app/core/resolvers/brands.resolver';
import { CategoriesResolver } from 'src/app/core/resolvers/categories.resolver';
import { ProductService } from 'src/app/core/services/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    BrandsResolver,
    CategoriesResolver,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
