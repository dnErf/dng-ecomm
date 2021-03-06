import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
// ---
import { AppRoutingModule } from './app-routing.module';
import { BrandsResolver } from 'src/app/core/resolvers/brands.resolver';
import { CategoriesResolver } from 'src/app/core/resolvers/categories.resolver';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';
import { JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { LoadingInterceptor } from 'src/app/core/interceptors/loading.interceptor';
import { ProductService } from 'src/app/core/services/product.service';
// ---
import { AboutPage } from './pages/about/about.page';
import { AppComponent } from './app.component';
import { HomePage } from 'src/app/pages/home/home.page';
import { NotFoundComponent } from 'src/app/components/not-found.component';
import { ServerErrorComponent } from 'src/app/components/server-error.component';

@NgModule({
  declarations: [
    AboutPage,
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
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    BrandsResolver,
    CategoriesResolver,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

