(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{fDPf:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class o{constructor(l,n,e,u){this.authenticationService=l,this.router=n,this.jwtHelper=e,this.toastr=u,this.logBool=!0,this.authBool=!1,this.AuthName="",this.model={email:"Andrewreg@test.com",password:"12345678"},this.NewModel={Firstname:"david",LastName:"dd",email:"david20@test.com",password:"00000000"}}ngOnInit(){}onSubmit(l){this.authenticationService.isLoggedIn()?this.toastr.warning("Already Login"):l.valid&&this.authenticationService.login(this.model).subscribe(l=>{console.log(l);const n=l._id;var e="";this.authenticationService.getAccessToken(l.sessions[l.sessions.length-1].token,n).subscribe(l=>{e=l.accessToken,localStorage.setItem("access_token",e),e=localStorage.getItem("access_token"),this.authenticationService.getUser(e,n).subscribe(l=>{localStorage.setItem("FirstName",l[0].Firstname),this.toastr.success("Welcome Back "+l[0].Firstname),this.authenticationService.setValue(localStorage.getItem("FirstName"),!0)})}),this.router.navigate(["/Books"])},l=>{this.toastr.error("Login Failed")})}onReg(l){this.authenticationService.isLoggedIn()?this.toastr.warning("Already Login"):l.valid&&this.authenticationService.register(this.NewModel).subscribe(l=>{const n=l._id;let e;this.authenticationService.getAccessToken(l.sessions[l.sessions.length-1].token,n).subscribe(l=>{e=l.accessToken,localStorage.setItem("access_token",e),this.authenticationService.getUser(e,n).subscribe(l=>{localStorage.setItem("FirstName",l[0].Firstname),this.toastr.success("Welcome "+l[0].Firstname),this.authenticationService.setValue(localStorage.getItem("FirstName"),!0)})}),this.router.navigate(["/Books"])},l=>{this.toastr.error("Register Failed")})}Reg(){this.logBool=!this.logBool}}class t{}var i=e("pMnS"),d=e("TSSN"),a=e("SVse"),s=e("s7LF"),r=e("y8gV"),g=e("iInd"),c=e("tl5U"),v=e("EApP"),m=u["\u0275crt"]({encapsulation:0,styles:[[".row[_ngcontent-%COMP%]{padding-left:2%}.loginImg[_ngcontent-%COMP%]{width:100%}.section[_ngcontent-%COMP%]{margin-top:10%!important}.LoginTxt[_ngcontent-%COMP%]{font-size:66px;padding-bottom:5%}label[_ngcontent-%COMP%]{font-size:20px}.loginBtn[_ngcontent-%COMP%]{margin-top:3%;padding:2% 7%;font-size:21px}.LogBox[_ngcontent-%COMP%]{display:grid}.new_acount[_ngcontent-%COMP%]{text-align:right;font-size:18px;cursor:pointer}.new_acount[_ngcontent-%COMP%]:hover{color:#f95609}"]],data:{}});function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("LOGIN.VALID_EMAIL")))}))}function f(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,p)),u["\u0275did"](2,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,u["\u0275nov"](n.parent,21).errors.required)}),null)}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" ",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("LOGIN.VALID_PASS")))}))}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](2,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,u["\u0275nov"](n.parent,38).errors.required)}),null)}function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,49,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,2,"h1",[["class","LoginTxt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,[" "," "])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](4,0,null,null,45,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var o=!0,t=l.component;return"submit"===n&&(o=!1!==u["\u0275nov"](l,6).onSubmit(e)&&o),"reset"===n&&(o=!1!==u["\u0275nov"](l,6).onReset()&&o),"ngSubmit"===n&&(o=!1!==(u["\u0275nov"](l,6).form.valid&&t.onSubmit(u["\u0275nov"](l,6)))&&o),o}),null,null)),u["\u0275did"](5,16384,null,0,s.o,[],null,null),u["\u0275did"](6,4210688,[["LoginForm",4]],0,s.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,s.b,null,[s.j]),u["\u0275did"](8,16384,null,0,s.i,[[4,s.b]],null,null),(l()(),u["\u0275eld"](9,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,2,"label",[["for","email"]],null,null,null,null,null)),(l()(),u["\u0275ted"](11,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](13,0,null,null,10,"input",[["aria-describedby","emailHelp"],["class","form-control"],["id","email"],["name","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var o=!0,t=l.component;return"input"===n&&(o=!1!==u["\u0275nov"](l,17)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==u["\u0275nov"](l,17).onTouched()&&o),"compositionstart"===n&&(o=!1!==u["\u0275nov"](l,17)._compositionStart()&&o),"compositionend"===n&&(o=!1!==u["\u0275nov"](l,17)._compositionEnd(e.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.model.email=e)&&o),o}),null,null)),u["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](15,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](16,{"is-invalid":0}),u["\u0275did"](17,16384,null,0,s.c,[u.Renderer2,u.ElementRef,[2,s.a]],null,null),u["\u0275did"](18,16384,null,0,s.l,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[s.l]),u["\u0275prd"](1024,null,s.f,(function(l){return[l]}),[s.c]),u["\u0275did"](21,671744,[["email",4]],0,s.k,[[2,s.b],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.g,null,[s.k]),u["\u0275did"](23,16384,null,0,s.h,[[4,s.g]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,f)),u["\u0275did"](25,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](26,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](27,0,null,null,2,"label",[["for","password"]],null,null,null,null,null)),(l()(),u["\u0275ted"](28,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](30,0,null,null,10,"input",[["class","form-control"],["id","password"],["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var o=!0,t=l.component;return"input"===n&&(o=!1!==u["\u0275nov"](l,34)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==u["\u0275nov"](l,34).onTouched()&&o),"compositionstart"===n&&(o=!1!==u["\u0275nov"](l,34)._compositionStart()&&o),"compositionend"===n&&(o=!1!==u["\u0275nov"](l,34)._compositionEnd(e.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.model.password=e)&&o),o}),null,null)),u["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](32,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](33,{"is-invalid":0}),u["\u0275did"](34,16384,null,0,s.c,[u.Renderer2,u.ElementRef,[2,s.a]],null,null),u["\u0275did"](35,16384,null,0,s.l,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[s.l]),u["\u0275prd"](1024,null,s.f,(function(l){return[l]}),[s.c]),u["\u0275did"](38,671744,[["password",4]],0,s.k,[[2,s.b],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.g,null,[s.k]),u["\u0275did"](40,16384,null,0,s.h,[[4,s.g]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](42,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](43,0,null,null,6,"div",[["class","LogBox"]],null,null,null,null,null)),(l()(),u["\u0275eld"](44,0,null,null,2,"button",[["class","btn btn-primary loginBtn"],["type","submit "]],null,null,null,null,null)),(l()(),u["\u0275ted"](45,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](47,0,null,null,2,"p",[["class","new_acount"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.Reg()&&u),u}),null,null)),(l()(),u["\u0275ted"](48,null,[" ",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],(function(l,n){var e=n.component,o=l(n,16,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,21).invalid);l(n,15,0,"form-control",o),l(n,18,0,""),l(n,21,0,"email",e.model.email),l(n,25,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,21).invalid);var t=l(n,33,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,38).invalid);l(n,32,0,"form-control",t),l(n,35,0,""),l(n,38,0,"password",e.model.password),l(n,42,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,38).invalid)}),(function(l,n){l(n,2,0,u["\u0275unv"](n,2,0,u["\u0275nov"](n,3).transform("LOGIN.LOGIN"))),l(n,4,0,u["\u0275nov"](n,8).ngClassUntouched,u["\u0275nov"](n,8).ngClassTouched,u["\u0275nov"](n,8).ngClassPristine,u["\u0275nov"](n,8).ngClassDirty,u["\u0275nov"](n,8).ngClassValid,u["\u0275nov"](n,8).ngClassInvalid,u["\u0275nov"](n,8).ngClassPending),l(n,11,0,u["\u0275unv"](n,11,0,u["\u0275nov"](n,12).transform("LOGIN.EMAIL_ADDRESS"))),l(n,13,0,u["\u0275nov"](n,18).required?"":null,u["\u0275nov"](n,23).ngClassUntouched,u["\u0275nov"](n,23).ngClassTouched,u["\u0275nov"](n,23).ngClassPristine,u["\u0275nov"](n,23).ngClassDirty,u["\u0275nov"](n,23).ngClassValid,u["\u0275nov"](n,23).ngClassInvalid,u["\u0275nov"](n,23).ngClassPending),l(n,28,0,u["\u0275unv"](n,28,0,u["\u0275nov"](n,29).transform("LOGIN.PASSWORD"))),l(n,30,0,u["\u0275nov"](n,35).required?"":null,u["\u0275nov"](n,40).ngClassUntouched,u["\u0275nov"](n,40).ngClassTouched,u["\u0275nov"](n,40).ngClassPristine,u["\u0275nov"](n,40).ngClassDirty,u["\u0275nov"](n,40).ngClassValid,u["\u0275nov"](n,40).ngClassInvalid,u["\u0275nov"](n,40).ngClassPending),l(n,45,0,u["\u0275unv"](n,45,0,u["\u0275nov"](n,46).transform("LOGIN.LOGIN"))),l(n,48,0,u["\u0275unv"](n,48,0,u["\u0275nov"](n,49).transform("LOGIN.CREATE_TXT")))}))}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("LOGIN.VALID_FIRST")))}))}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,R)),u["\u0275did"](2,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,u["\u0275nov"](n.parent,22).errors.required)}),null)}function N(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("LOGIN.VALID_LAST")))}))}function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,N)),u["\u0275did"](2,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,u["\u0275nov"](n.parent,39).errors.required)}),null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("LOGIN.VALID_EMAIL")))}))}function S(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](2,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,u["\u0275nov"](n.parent,57).errors.required)}),null)}function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" ",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],null,(function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform("LOGIN.VALID_PASS")))}))}function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,L)),u["\u0275did"](2,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,u["\u0275nov"](n.parent,74).errors.required)}),null)}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,85,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,2,"h1",[["class","LoginTxt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,[" "," "])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](4,0,null,null,81,"form",[["class","needs-validation"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var o=!0,t=l.component;return"submit"===n&&(o=!1!==u["\u0275nov"](l,6).onSubmit(e)&&o),"reset"===n&&(o=!1!==u["\u0275nov"](l,6).onReset()&&o),"ngSubmit"===n&&(o=!1!==(u["\u0275nov"](l,6).form.valid&&t.onReg(u["\u0275nov"](l,6)))&&o),o}),null,null)),u["\u0275did"](5,16384,null,0,s.o,[],null,null),u["\u0275did"](6,4210688,[["RegForm",4]],0,s.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,s.b,null,[s.j]),u["\u0275did"](8,16384,null,0,s.i,[[4,s.b]],null,null),(l()(),u["\u0275eld"](9,0,null,null,34,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,16,"div",[["class","col"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,2,"label",[["for","Firstname"]],null,null,null,null,null)),(l()(),u["\u0275ted"](12,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](14,0,null,null,10,"input",[["class","form-control"],["id","firstname"],["name","firstname"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var o=!0,t=l.component;return"input"===n&&(o=!1!==u["\u0275nov"](l,18)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==u["\u0275nov"](l,18).onTouched()&&o),"compositionstart"===n&&(o=!1!==u["\u0275nov"](l,18)._compositionStart()&&o),"compositionend"===n&&(o=!1!==u["\u0275nov"](l,18)._compositionEnd(e.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.NewModel.Firstname=e)&&o),o}),null,null)),u["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](16,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](17,{"is-invalid":0}),u["\u0275did"](18,16384,null,0,s.c,[u.Renderer2,u.ElementRef,[2,s.a]],null,null),u["\u0275did"](19,16384,null,0,s.l,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[s.l]),u["\u0275prd"](1024,null,s.f,(function(l){return[l]}),[s.c]),u["\u0275did"](22,671744,[["firstname",4]],0,s.k,[[2,s.b],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.g,null,[s.k]),u["\u0275did"](24,16384,null,0,s.h,[[4,s.g]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](26,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](27,0,null,null,16,"div",[["class","col"]],null,null,null,null,null)),(l()(),u["\u0275eld"](28,0,null,null,2,"label",[["for","LastName"]],null,null,null,null,null)),(l()(),u["\u0275ted"](29,null,[" "," "])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](31,0,null,null,10,"input",[["class","form-control"],["id","lastName"],["name","lastName"],["placeholder","Last name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var o=!0,t=l.component;return"input"===n&&(o=!1!==u["\u0275nov"](l,35)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==u["\u0275nov"](l,35).onTouched()&&o),"compositionstart"===n&&(o=!1!==u["\u0275nov"](l,35)._compositionStart()&&o),"compositionend"===n&&(o=!1!==u["\u0275nov"](l,35)._compositionEnd(e.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.NewModel.LastName=e)&&o),o}),null,null)),u["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](33,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](34,{"is-invalid":0}),u["\u0275did"](35,16384,null,0,s.c,[u.Renderer2,u.ElementRef,[2,s.a]],null,null),u["\u0275did"](36,16384,null,0,s.l,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[s.l]),u["\u0275prd"](1024,null,s.f,(function(l){return[l]}),[s.c]),u["\u0275did"](39,671744,[["lastName",4]],0,s.k,[[2,s.b],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.g,null,[s.k]),u["\u0275did"](41,16384,null,0,s.h,[[4,s.g]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,k)),u["\u0275did"](43,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](45,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](46,0,null,null,2,"label",[["for","email"]],null,null,null,null,null)),(l()(),u["\u0275ted"](47,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](49,0,null,null,10,"input",[["aria-describedby","emailHelp"],["class","form-control"],["id","email"],["name","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var o=!0,t=l.component;return"input"===n&&(o=!1!==u["\u0275nov"](l,53)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==u["\u0275nov"](l,53).onTouched()&&o),"compositionstart"===n&&(o=!1!==u["\u0275nov"](l,53)._compositionStart()&&o),"compositionend"===n&&(o=!1!==u["\u0275nov"](l,53)._compositionEnd(e.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.NewModel.email=e)&&o),o}),null,null)),u["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](51,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](52,{"is-invalid":0}),u["\u0275did"](53,16384,null,0,s.c,[u.Renderer2,u.ElementRef,[2,s.a]],null,null),u["\u0275did"](54,16384,null,0,s.l,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[s.l]),u["\u0275prd"](1024,null,s.f,(function(l){return[l]}),[s.c]),u["\u0275did"](57,671744,[["email",4]],0,s.k,[[2,s.b],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.g,null,[s.k]),u["\u0275did"](59,16384,null,0,s.h,[[4,s.g]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,S)),u["\u0275did"](61,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](62,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](63,0,null,null,2,"label",[["for","password"]],null,null,null,null,null)),(l()(),u["\u0275ted"](64,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](66,0,null,null,10,"input",[["class","form-control"],["id","password"],["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var o=!0,t=l.component;return"input"===n&&(o=!1!==u["\u0275nov"](l,70)._handleInput(e.target.value)&&o),"blur"===n&&(o=!1!==u["\u0275nov"](l,70).onTouched()&&o),"compositionstart"===n&&(o=!1!==u["\u0275nov"](l,70)._compositionStart()&&o),"compositionend"===n&&(o=!1!==u["\u0275nov"](l,70)._compositionEnd(e.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.NewModel.password=e)&&o),o}),null,null)),u["\u0275prd"](512,null,a["\u0275NgClassImpl"],a["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](68,278528,null,0,a.NgClass,[a["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](69,{"is-invalid":0}),u["\u0275did"](70,16384,null,0,s.c,[u.Renderer2,u.ElementRef,[2,s.a]],null,null),u["\u0275did"](71,16384,null,0,s.l,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,s.e,(function(l){return[l]}),[s.l]),u["\u0275prd"](1024,null,s.f,(function(l){return[l]}),[s.c]),u["\u0275did"](74,671744,[["password",4]],0,s.k,[[2,s.b],[6,s.e],[8,null],[6,s.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.g,null,[s.k]),u["\u0275did"](76,16384,null,0,s.h,[[4,s.g]],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,_)),u["\u0275did"](78,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](79,0,null,null,6,"div",[["class","LogBox"]],null,null,null,null,null)),(l()(),u["\u0275eld"](80,0,null,null,2,"button",[["class","btn btn-primary loginBtn"],["type","submit "]],null,null,null,null,null)),(l()(),u["\u0275ted"](81,null,["",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](83,0,null,null,2,"p",[["class","new_acount"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.Reg()&&u),u}),null,null)),(l()(),u["\u0275ted"](84,null,[" ",""])),u["\u0275pid"](131072,d.j,[d.k,u.ChangeDetectorRef])],(function(l,n){var e=n.component,o=l(n,17,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,22).invalid);l(n,16,0,"form-control",o),l(n,19,0,""),l(n,22,0,"firstname",e.NewModel.Firstname),l(n,26,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,22).invalid);var t=l(n,34,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,39).invalid);l(n,33,0,"form-control",t),l(n,36,0,""),l(n,39,0,"lastName",e.NewModel.LastName),l(n,43,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,39).invalid);var i=l(n,52,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,57).invalid);l(n,51,0,"form-control",i),l(n,54,0,""),l(n,57,0,"email",e.NewModel.email),l(n,61,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,57).invalid);var d=l(n,69,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,74).invalid);l(n,68,0,"form-control",d),l(n,71,0,""),l(n,74,0,"password",e.NewModel.password),l(n,78,0,u["\u0275nov"](n,6).submitted&&u["\u0275nov"](n,74).invalid)}),(function(l,n){l(n,2,0,u["\u0275unv"](n,2,0,u["\u0275nov"](n,3).transform("LOGIN.REGISTRATION"))),l(n,4,0,u["\u0275nov"](n,8).ngClassUntouched,u["\u0275nov"](n,8).ngClassTouched,u["\u0275nov"](n,8).ngClassPristine,u["\u0275nov"](n,8).ngClassDirty,u["\u0275nov"](n,8).ngClassValid,u["\u0275nov"](n,8).ngClassInvalid,u["\u0275nov"](n,8).ngClassPending),l(n,12,0,u["\u0275unv"](n,12,0,u["\u0275nov"](n,13).transform("LOGIN.FIRST_NAME"))),l(n,14,0,u["\u0275nov"](n,19).required?"":null,u["\u0275nov"](n,24).ngClassUntouched,u["\u0275nov"](n,24).ngClassTouched,u["\u0275nov"](n,24).ngClassPristine,u["\u0275nov"](n,24).ngClassDirty,u["\u0275nov"](n,24).ngClassValid,u["\u0275nov"](n,24).ngClassInvalid,u["\u0275nov"](n,24).ngClassPending),l(n,29,0,u["\u0275unv"](n,29,0,u["\u0275nov"](n,30).transform("LOGIN.LAST"))),l(n,31,0,u["\u0275nov"](n,36).required?"":null,u["\u0275nov"](n,41).ngClassUntouched,u["\u0275nov"](n,41).ngClassTouched,u["\u0275nov"](n,41).ngClassPristine,u["\u0275nov"](n,41).ngClassDirty,u["\u0275nov"](n,41).ngClassValid,u["\u0275nov"](n,41).ngClassInvalid,u["\u0275nov"](n,41).ngClassPending),l(n,47,0,u["\u0275unv"](n,47,0,u["\u0275nov"](n,48).transform("LOGIN.EMAIL_ADDRESS"))),l(n,49,0,u["\u0275nov"](n,54).required?"":null,u["\u0275nov"](n,59).ngClassUntouched,u["\u0275nov"](n,59).ngClassTouched,u["\u0275nov"](n,59).ngClassPristine,u["\u0275nov"](n,59).ngClassDirty,u["\u0275nov"](n,59).ngClassValid,u["\u0275nov"](n,59).ngClassInvalid,u["\u0275nov"](n,59).ngClassPending),l(n,64,0,u["\u0275unv"](n,64,0,u["\u0275nov"](n,65).transform("LOGIN.PASSWORD"))),l(n,66,0,u["\u0275nov"](n,71).required?"":null,u["\u0275nov"](n,76).ngClassUntouched,u["\u0275nov"](n,76).ngClassTouched,u["\u0275nov"](n,76).ngClassPristine,u["\u0275nov"](n,76).ngClassDirty,u["\u0275nov"](n,76).ngClassValid,u["\u0275nov"](n,76).ngClassInvalid,u["\u0275nov"](n,76).ngClassPending),l(n,81,0,u["\u0275unv"](n,81,0,u["\u0275nov"](n,82).transform("LOGIN.REGISTER"))),l(n,84,0,u["\u0275unv"](n,84,0,u["\u0275nov"](n,85).transform("LOGIN.ALEARDY_TXT")))}))}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,8,"section",[["class","section"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,1,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,0,"img",[["class","loginImg"],["src","assets/images/undraw_messenger_e7iu.png"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,4,"div",[["class","col-md-4 "]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,I)),u["\u0275did"](6,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,D)),u["\u0275did"](8,16384,null,0,a.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,6,0,e.logBool),l(n,8,0,!e.logBool)}),null)}var M=u["\u0275ccf"]("app-login",o,(function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,T,m)),u["\u0275did"](1,114688,null,0,o,[r.a,g.k,c.b,v.j],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);e.d(n,"LoginModuleNgFactory",(function(){return y}));var y=u["\u0275cmf"](t,[],(function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,M]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[u.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,s.n,s.n,[]),u["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),u["\u0275mpd"](1073742336,g.n,g.n,[[2,g.s],[2,g.k]]),u["\u0275mpd"](1073742336,s.m,s.m,[]),u["\u0275mpd"](1073742336,s.d,s.d,[]),u["\u0275mpd"](1073742336,d.h,d.h,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,g.i,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);