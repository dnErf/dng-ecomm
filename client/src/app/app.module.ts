import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// ---
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsResolver } from 'src/app/core/resolvers/brands.resolver';
import { CategoriesResolver } from 'src/app/core/resolvers/categories.resolver';
import { ProductService } from 'src/app/core/services/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    BrandsResolver,
    CategoriesResolver,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
