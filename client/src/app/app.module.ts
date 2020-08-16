import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
// ---
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsResolver } from 'src/app/core/resolvers/brands.resolver';
import { CategoriesResolver } from 'src/app/core/resolvers/categories.resolver';
import { HomePage } from 'src/app/pages/home/home.page';
import { LoadingInterceptor } from 'src/app/core/interceptors/loading.interceptor';
import { ProductService } from 'src/app/core/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    NgxSpinnerModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    BrandsResolver,
    CategoriesResolver,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
