import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './shop.page.html',
})
export class ShopPage implements OnInit {

  data;

  constructor (
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((response) => {
      this.data = response.data;
    });
  }

}
