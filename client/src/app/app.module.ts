import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductService } from 'src/app/core/services/product.service';
import { ProductListResolver } from 'src/app/core/resolvers/product-list.resolver';
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
    ProductService,
    ProductListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
