(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4+IK":function(t,e,r){"use strict";r.r(e),r.d(e,"AccountModule",(function(){return A}));var o=r("ofXK"),n=r("tyNb"),i=r("HUga"),s=r("3Pt+"),a=r("AytR"),b=r("fXoL"),c=r("9pgZ"),l=r("5eHb"),u=r("WtuX");let m=(()=>{class t{constructor(t,e,r,o){this.router=t,this.activatedRoute=e,this.servAccount=r,this.toastr=o}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new s.e({email:new s.c("",s.o.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")),password:new s.c("",s.o.required)})}logAsGuest(){this.loginForm.setValue({email:a.a.GUEST_EM,password:a.a.GUEST_PW})}onSubmit(){this.servAccount.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},t=>{console.error(t),this.toastr.error("oops, something went wrong.")})}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(n.c),b.Kb(n.a),b.Kb(c.a),b.Kb(l.b))},t.\u0275cmp=b.Eb({type:t,selectors:[["account-login"]],decls:12,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],["type","submit",1,"btn","btn-lg","btn-block",3,"click"]],template:function(t,e){1&t&&(b.Qb(0,"div",0),b.Qb(1,"div",1),b.Qb(2,"form",2),b.Xb("ngSubmit",(function(){return e.onSubmit()})),b.Qb(3,"div",3),b.Qb(4,"h1",4),b.Ac(5,"Login"),b.Pb(),b.Pb(),b.Lb(6,"app-text",5),b.Lb(7,"app-text",6),b.Qb(8,"button",7),b.Ac(9,"Sign in"),b.Pb(),b.Qb(10,"button",8),b.Xb("click",(function(){return e.logAsGuest()})),b.Ac(11,"LogIn as Guest"),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.zb(2),b.hc("formGroup",e.loginForm),b.zb(4),b.hc("label","Email Address"),b.zb(1),b.hc("label","Password")("type","password"),b.zb(1),b.hc("disabled",e.loginForm.invalid))},directives:[s.p,s.l,s.f,u.a,s.k,s.d],encapsulation:2}),t})();var p=r("eIep"),d=r("lJxs"),h=r("HDdC"),g=r("D0XW"),f=r("DH7j");function w(t){return!Object(f.a)(t)&&t-parseFloat(t)+1>=0}var v=r("z+Ro");function y(t){const{index:e,period:r,subscriber:o}=t;if(o.next(e),!o.closed){if(-1===r)return o.complete();t.index=e+1,this.schedule(t,r)}}var P=r("LRne");let x=(()=>{class t{constructor(t,e,r){this.fb=t,this.servAccount=e,this.router=r}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[s.o.required]],email:[null,[s.o.required,s.o.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[s.o.required]]})}onSubmit(){this.servAccount.register(this.registerForm.value).subscribe(t=>{this.router.navigateByUrl("/shop")},t=>{console.log(t),this.errors=t.errors})}validateEmailNotTaken(){return t=>function(t=0,e,r){let o=-1;return w(e)?o=Number(e)<1?1:Number(e):Object(v.a)(e)&&(r=e),Object(v.a)(r)||(r=g.a),new h.a(e=>{const n=w(t)?t:+t-r.now();return r.schedule(y,n,{index:0,period:o,subscriber:e})})}(500).pipe(Object(p.a)(()=>t.value?this.servAccount.checkEmailExists(t.value).pipe(Object(d.a)(t=>t?{emailExists:!0}:null)):Object(P.a)(null)))}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(s.b),b.Kb(c.a),b.Kb(n.c))},t.\u0275cmp=b.Eb({type:t,selectors:[["account-register"]],decls:11,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block"]],template:function(t,e){1&t&&(b.Qb(0,"div",0),b.Qb(1,"div",1),b.Qb(2,"form",2),b.Xb("ngSubmit",(function(){return e.onSubmit()})),b.Qb(3,"div",3),b.Qb(4,"h1",4),b.Ac(5,"Register"),b.Pb(),b.Pb(),b.Lb(6,"app-text",5),b.Lb(7,"app-text",6),b.Lb(8,"app-text",7),b.Qb(9,"button",8),b.Ac(10,"Register"),b.Pb(),b.Pb(),b.Pb(),b.Pb()),2&t&&(b.zb(2),b.hc("formGroup",e.registerForm),b.zb(4),b.hc("label","Display Name"),b.zb(1),b.hc("label","Email Address"),b.zb(1),b.hc("label","Password")("type","password"))},directives:[s.p,s.l,s.f,u.a,s.k,s.d],encapsulation:2}),t})(),A=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},providers:[],imports:[[o.c,i.a,n.g.forChild([{path:"login",component:m},{path:"register",component:x}])]]}),t})()}}]);