import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
// ----
import { environment as env } from 'src/environments/environment';
import { iorder } from 'src/app/common/interfaces/iorder';
import { ibasket } from 'src/app/common/interfaces/ibasket';
import { BasketService } from 'src/app/core/services/basket.service';
import { CheckoutService } from 'src/app/core/services/checkout.service';

declare var Stripe;

@Component({
  selector: 'checkout-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements AfterViewInit, OnDestroy {

  @Input() checkoutForm:FormGroup
  @ViewChild('cardNumber', { static: true }) cardNumberElement:ElementRef;
  @ViewChild('cardExpiry', { static: true }) cardExpiryElement:ElementRef;
  @ViewChild('cardCvc', { static: true }) cardCvcElement:ElementRef;

  stripe: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: any;
  cardHandler = this.onChange.bind(this);
  loading = false;
  cardNumberValid = false;
  cardExpiryValid = false;
  cardCvcValid = false;

  constructor (
    private servBasket:BasketService,
    private servCheckout:CheckoutService,
    private router:Router,
    private toastr:ToastrService,
  ) { }

  ngAfterViewInit() {
    this.stripe = Stripe(`${env.SPUB_KEY}`);
    const elements = this.stripe.elements();

    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount(this.cardNumberElement.nativeElement);
    this.cardNumber.addEventListener('change', this.cardHandler);

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
    this.cardExpiry.addEventListener('change', this.cardHandler);

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount(this.cardCvcElement.nativeElement);
    this.cardCvc.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  onChange(event) {
    console.log('onchange is fired')
    if (event.error) {
      this.cardErrors = event.error.message;
    } else {
      this.cardErrors = null;
    }
    switch (event.elementType) {
      case 'cardNumber':
        this.cardNumberValid = event.complete;
        break;
      case 'cardExpiry':
        this.cardExpiryValid = event.complete;
        break;
      case 'cardCvc':
        this.cardCvcValid = event.complete;
        break;
    }
  }

  async submitOrder() {

    this.toggleLoading();

    try {
      let basket = this.servBasket.getCurrentBasketValue();
      let createdOrder = await this.createOrder(this.getOrderToCreate(basket));
      let paymentResult = await this.confirmPaymentWithStripe(basket);

      if (paymentResult.paymentIntent) {
        this.servBasket.deleteBasket(basket);
        this.router.navigate(['checkout/success'], { state: createdOrder })
      }
      else {
        this.toastr.error(paymentResult.error.message);
      }
    }
    catch (err) {
      console.log(err);
    }
    finally {
      this.toggleLoading();
    }
    
  }

  private async confirmPaymentWithStripe(basket) {
    return this.stripe.confirmCardPayment(basket.clientSecret, {
      payment_method: {
        card: this.cardNumber,
        billing_details: {
          name: this.checkoutForm.get('paymentForm').get('nameOnCard').value
        }
      }
    });
  }

  private async createOrder(orderToCreate) {
    return this.servCheckout.createOrder(orderToCreate).toPromise();
  }

  private getOrderToCreate(basket:ibasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value
    };
  }

  private toggleLoading() {
    if (this.loading) {
      this.loading = false;
    }
    else {
      this.loading = true;
    }
  }

}
