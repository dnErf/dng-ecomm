import { Component, OnInit } from '@angular/core';
// ---
import { iorder } from 'src/app/common/interfaces/iorder';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html'
})
export class OrdersPage implements OnInit {

  orders:iorder[];
    
  constructor (
    private servOrder:OrderService
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.servOrder.getOrdersForUser()
      .subscribe(
        (orders:iorder[]) => {
          this.orders = orders;
        }, 
        (err) => {
          console.log(err);
        }
      );
  }

}
