(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Xlj8:function(t,r,e){"use strict";e.r(r),e.d(r,"OrdersModule",(function(){return h}));var o=e("ofXK"),s=e("tyNb"),c=e("HUga"),i=e("fXoL"),n=e("AytR"),b=e("tk/3");let d=(()=>{class t{constructor(t){this.http=t}getOrdersForUser(){return this.http.get(n.a.baseUrl+"/orders")}getOrderDetailed(t){return this.http.get(`${n.a.baseUrl}/orders/${t}`)}}return t.\u0275fac=function(r){return new(r||t)(i.Ub(b.b))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function a(t,r){if(1&t&&(i.Qb(0,"tr",6),i.Qb(1,"th"),i.Ac(2),i.Pb(),i.Qb(3,"td"),i.Ac(4),i.cc(5,"date"),i.Pb(),i.Qb(6,"td"),i.Ac(7),i.cc(8,"currency"),i.Pb(),i.Qb(9,"td"),i.Ac(10),i.Pb(),i.Pb()),2&t){const t=r.$implicit;i.jc("routerLink","/orders/",t.id,""),i.zb(2),i.Cc("# ",t.id,""),i.zb(2),i.Bc(i.ec(5,5,t.orderDate,"medium")),i.zb(3),i.Bc(i.dc(8,8,t.total)),i.zb(3),i.Bc(t.status)}}let l=(()=>{class t{constructor(t){this.servOrder=t}ngOnInit(){this.getOrders()}getOrders(){this.servOrder.getOrdersForUser().subscribe(t=>{this.orders=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(i.Kb(d))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(i.Qb(0,"div",0),i.Qb(1,"div",1),i.Qb(2,"div",2),i.Qb(3,"table",3),i.Qb(4,"thead",4),i.Qb(5,"tr"),i.Qb(6,"th"),i.Ac(7,"Order"),i.Pb(),i.Qb(8,"th"),i.Ac(9,"Date"),i.Pb(),i.Qb(10,"th"),i.Ac(11,"Total"),i.Pb(),i.Qb(12,"th"),i.Ac(13,"Status"),i.Pb(),i.Pb(),i.Pb(),i.Qb(14,"tbody"),i.yc(15,a,11,10,"tr",5),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&t&&(i.zb(15),i.hc("ngForOf",r.orders))},directives:[o.l,s.d],pipes:[o.f,o.d],encapsulation:2}),t})();function u(t,r){if(1&t&&(i.Qb(0,"div",2),i.Qb(1,"div",3),i.Ac(2," summary "),i.Lb(3,"app-basket-summary",4),i.Pb(),i.Qb(4,"div",5),i.Lb(5,"app-order-totals",6),i.Pb(),i.Pb()),2&t){const t=i.bc();i.zb(3),i.hc("items",t.order.orderItems)("isBasket",!1)("isOrder",!0),i.zb(2),i.hc("shippingPrice",t.order.shippingPrice)("subtotal",t.order.subtotal)("total",t.order.total)}}let p=(()=>{class t{constructor(t,r){this.route=t,this.servOrder=r}ngOnInit(){this.servOrder.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(t=>{console.log(t),this.order=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(i.Kb(s.a),i.Kb(d))},t.\u0275cmp=i.Eb({type:t,selectors:[["order-detail"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(t,r){1&t&&(i.Qb(0,"div",0),i.yc(1,u,6,6,"div",1),i.Pb()),2&t&&(i.zb(1),i.hc("ngIf",r.order))},directives:[o.m],encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(r){return new(r||t)},providers:[],imports:[[o.c,c.a,s.g.forChild([{path:"",component:l},{path:":id",component:p}])]]}),t})()}}]);