import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ---
import { iorder } from 'src/app/common/interfaces/iorder';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.page.html'
})
export class OrderDetailPage implements OnInit {

  order:iorder;

  constructor (
    private route:ActivatedRoute, 
    private servOrder:OrderService
  ) { }

  ngOnInit() {
    this.servOrder.getOrderDetailed(+this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (order:iorder) => {
          console.log(order)
          this.order = order;
        }, 
        (err) => {
          console.log(err);
        }
      );
  }

}
