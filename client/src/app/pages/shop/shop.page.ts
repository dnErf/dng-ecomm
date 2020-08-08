import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ---
import { ProductService } from 'src/app/core/services/product.service';
import { ProductParams } from 'src/app/common/class/ProductParams';

@Component({
  selector: 'shop',
  templateUrl: './shop.page.html',
})
export class ShopPage implements OnInit {

  @ViewChild('search', { static: true }) searchTerm:ElementRef;

  brands;
  categories;
  products;
  productParams;
  productCount;

  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDsc' }
  ]

  constructor (
    private servProduct:ProductService,
    private route:ActivatedRoute
  ) { 
    this.productParams = new ProductParams();
    this.route.data.subscribe((response) => {
      this.brands = [ { id: 0, name: 'All' }, ...response.brands ];
      this.categories = [ { id: 0, name: 'All' }, ...response.categories ];
      
    }); 
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.servProduct.getProducts(this.productParams).subscribe(
      (res) => { console.log(res)
        this.products = res.data;
        this.productCount = res.count;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onBrandSelect(id:number) {
    this.productParams.brandId = id;
    this.productParams.pageNumber = 1;
    this.getProducts();
  }

  onCategorySelect(id:number) {
    this.productParams.categoryId = id;
    this.getProducts();
  }

  onSearch(event) {
    event.preventDefault();
    this.productParams.search = this.searchTerm.nativeElement.value;
    this.productParams.pageNumber = 1;
    this.getProducts(); 
  }

  onSortSelect(sort:string) {
    this.productParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(nextPage:number) {
    if (this.productParams.pageNumber !== nextPage) {
      this.productParams.pageNumber = nextPage;
      this.getProducts();
    }
  }

}
