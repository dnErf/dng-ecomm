import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
// ---
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsResolver } from 'src/app/core/resolvers/brands.resolver';
import { CategoriesResolver } from 'src/app/core/resolvers/categories.resolver';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';
import { HomePage } from 'src/app/pages/home/home.page';
import { LoadingInterceptor } from 'src/app/core/interceptors/loading.interceptor';
import { NotFoundComponent } from 'src/app/components/not-found.component';
import { ProductService } from 'src/app/core/services/product.service';
import { ServerErrorComponent } from 'src/app/components/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ServerErrorComponent,
    HomePage
  ],
  imports: [
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    BrandsResolver,
    CategoriesResolver,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// npm i --save ngx-toastr
