(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{D0XW:function(n,o,t){"use strict";t.d(o,"a",(function(){return e}));var r=t("3N8a");const e=new(t("IjjT").a)(r.a)},HUga:function(n,o,t){"use strict";t.d(o,"a",(function(){return c}));var r=t("ofXK"),e=t("3Pt+"),l=t("tyNb"),i=t("fXoL");let c=(()=>{class n{}return n.\u0275mod=i.Ib({type:n}),n.\u0275inj=i.Hb({factory:function(o){return new(o||n)},imports:[[r.c,e.h,e.n,l.g],e.h,e.n]}),n})()},WtuX:function(n,o,t){"use strict";t.d(o,"a",(function(){return b}));var r=t("fXoL"),e=t("3Pt+"),l=t("ofXK");const i=["input"];function c(n,o){1&n&&r.Lb(0,"div",7)}function a(n,o){if(1&n&&(r.Qb(0,"span"),r.Ac(1),r.Pb()),2&n){const n=r.bc(2);r.zb(1),r.Cc("",n.label," is required")}}function s(n,o){1&n&&(r.Qb(0,"span"),r.Ac(1,"Invalid email address"),r.Pb())}function p(n,o){if(1&n&&(r.Qb(0,"div",8),r.yc(1,a,2,1,"span",9),r.yc(2,s,2,0,"span",9),r.Pb()),2&n){const n=r.bc();r.zb(1),r.hc("ngIf",null==n.controlDir.control.errors?null:n.controlDir.control.errors.required),r.zb(1),r.hc("ngIf",null==n.controlDir.control.errors?null:n.controlDir.control.errors.pattern)}}function u(n,o){1&n&&(r.Qb(0,"span"),r.Ac(1,"Email address is in use"),r.Pb())}function d(n,o){if(1&n&&(r.Qb(0,"div",10),r.yc(1,u,2,0,"span",9),r.Pb()),2&n){const n=r.bc();r.zb(1),r.hc("ngIf",null==n.controlDir.control.errors?null:n.controlDir.control.errors.emailExists)}}let b=(()=>{class n{constructor(n){this.controlDir=n,this.type="text",this.controlDir.valueAccessor=this}ngOnInit(){let n=this.controlDir.control,o=n.asyncValidator?[n.asyncValidator]:[];n.setValidators(n.validator?[n.validator]:[]),n.setAsyncValidators(o),n.updateValueAndValidity()}onChange(n){}onTouched(){}writeValue(n){this.input.nativeElement.value=n||""}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}isValidInput(){return this.controlDir&&this.controlDir.control&&this.controlDir.control.touched&&this.controlDir.control.dirty?this.controlDir.control.valid&&this.controlDir.control.value?"is-valid":"is-invalid":null}}return n.\u0275fac=function(o){return new(o||n)(r.Kb(e.j,2))},n.\u0275cmp=r.Eb({type:n,selectors:[["app-text"]],viewQuery:function(n,o){var t;1&n&&r.vc(i,!0),2&n&&r.pc(t=r.Yb())&&(o.input=t.first)},inputs:{type:"type",label:"label"},decls:8,vars:9,consts:[[1,"form-label-group"],[1,"form-control",3,"ngClass","type","id","placeholder","input","blur"],["input",""],["class","fa fa-spinner fa-spin loader",4,"ngIf"],[3,"for"],["class","invalid-feedback",4,"ngIf"],["class","invalid-feedback d-block",4,"ngIf"],[1,"fa","fa-spinner","fa-spin","loader"],[1,"invalid-feedback"],[4,"ngIf"],[1,"invalid-feedback","d-block"]],template:function(n,o){1&n&&(r.Qb(0,"div",0),r.Qb(1,"input",1,2),r.Xb("input",(function(n){return o.onChange(n.target.value)}))("blur",(function(){return o.onTouched()})),r.Pb(),r.yc(3,c,1,0,"div",3),r.Qb(4,"label",4),r.Ac(5),r.Pb(),r.yc(6,p,3,2,"div",5),r.yc(7,d,2,1,"div",6),r.Pb()),2&n&&(r.zb(1),r.ic("id",o.label),r.ic("placeholder",o.label),r.hc("ngClass",o.isValidInput())("type",o.type),r.zb(2),r.hc("ngIf",o.controlDir&&o.controlDir.control&&"PENDING"===o.controlDir.control.status),r.zb(1),r.ic("for",o.label),r.zb(1),r.Bc(o.label),r.zb(1),r.hc("ngIf",o.controlDir&&o.controlDir.control&&!o.controlDir.control.valid&&o.controlDir.control.touched),r.zb(1),r.hc("ngIf",o.controlDir&&o.controlDir.control&&!o.controlDir.control.valid&&o.controlDir.control.dirty))},directives:[l.k,l.m],styles:[".form-label-group[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 1rem;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    height: 3.125rem;\n    padding: .75rem;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    margin-bottom: 0; \n    line-height: 1.5;\n    color: #495057;\n    pointer-events: none;\n    cursor: text; \n    border: 1px solid transparent;\n    border-radius: .25rem;\n    transition: all .1s ease-in-out;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    color: transparent;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n    color: transparent;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n    color: transparent;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: transparent;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: transparent;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown) {\n    padding-top: 1.25rem;\n    padding-bottom: .25rem;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-ms-input-placeholder) {\n    padding-top: 1.25rem;\n    padding-bottom: .25rem;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n    padding-top: 1.25rem;\n    padding-bottom: .25rem;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n    padding-top: .25rem;\n    padding-bottom: .25rem;\n    font-size: 12px;\n    color: #777;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-ms-input-placeholder)    ~ label[_ngcontent-%COMP%] {\n    padding-top: .25rem;\n    padding-bottom: .25rem;\n    font-size: 12px;\n    color: #777;\n  }\n  \n  .form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n    padding-top: .25rem;\n    padding-bottom: .25rem;\n    font-size: 12px;\n    color: #777;\n  }\n\n  .loader[_ngcontent-%COMP%] {\n    position: absolute;\n    width: auto;\n    top: 15px;\n    right: 10px;\n    margin-top: 0;\n  }"]}),n})()}}]);