(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TNpa:function(l,n,e){"use strict";l.exports=function(l,n,e,o){void 0===n&&(n=1),void 0===e&&(e=10),void 0===o&&(o=10);var t,s,a=Math.ceil(l/e);if(n<1?n=1:n>a&&(n=a),a<=o)t=1,s=a;else{var u=Math.floor(o/2),i=Math.ceil(o/2)-1;n<=u?(t=1,s=o):n+i>=a?(t=a-o+1,s=a):(t=n-u,s=n+i)}var r=(n-1)*e,g=Math.min(r+e-1,l-1),c=Array.from(Array(s+1-t).keys()).map((function(l){return t+l}));return{totalItems:l,currentPage:n,pageSize:e,totalPages:a,startPage:t,endPage:s,startIndex:r,endIndex:g,pages:c}}},l2jE:function(l,n,e){"use strict";e.r(n);var o=e("8Y7J");class t{constructor(l,n,e){this.router=l,this._route=n,this.bookService=e,this.BooksInfo=[],this.items=[{id:0,bookImg:"assets/images/books/book-1.jpg"},{id:1,bookImg:"assets/images/books/book-1.jpg"},{id:2,bookImg:"assets/images/books/book-2.jpg"},{id:3,bookImg:"assets/images/books/book-2.jpg"},{id:4,bookImg:"assets/images/books/book-3.jpg"},{id:5,bookImg:"assets/images/books/book-3.jpg"},{id:6,bookImg:"assets/images/books/book-4.jpg"},{id:7,bookImg:"assets/images/books/book-4.jpg"},{id:8,bookImg:"assets/images/books/book-5.jpg"},{id:9,bookImg:"assets/images/books/book-5.jpg"},{id:10,bookImg:"assets/images/books/book-6.jpg"},{id:11,bookImg:"assets/images/books/book-6.jpg"},{id:12,bookImg:"assets/images/books/book-7.jpg"},{id:13,bookImg:"assets/images/books/book-7.jpg"},{id:14,bookImg:"assets/images/books/book-8.jpg"},{id:15,bookImg:"assets/images/books/book-8.jpg"},{id:16,bookImg:"assets/images/books/book-9.jpg"},{id:17,bookImg:"assets/images/books/book-9.jpg"},{id:18,bookImg:"assets/images/books/book-10.jpg"},{id:19,bookImg:"assets/images/books/book-10.jpg"}],window.scrollTo(0,0)}ngOnInit(){window.scrollTo(0,0),this.GetBooks(),console.log(this.BooksInfo)}GetBooks(){this.bookService.get().subscribe(l=>{let n=l.length;for(let e=0;e<n;e++)this.BooksInfo.push(l[e])})}onChangePage(l){window.scrollTo(0,0),this.pageOfItems=l}OpenBook(l,n){console.log(l),this.router.navigate([`SingleBook/${l}`],{queryParams:{ImgNum:n}})}}class s{constructor(l,n,e){this.bookService=l,this.router=n,this.activatedRoute=e,this.BookItem={BookAuther:"",BookDes:"",BookName:"",BookPrice:"",_id:""},this.BookImg="",this.items=[{id:1,name:"item1",bookImg:"assets/images/books/book-1.jpg",Aurthor:"John Nathan Muller",aboutBook:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}],window.scrollTo(0,0),this.activatedRoute.queryParams.subscribe(l=>{let n=+l.ImgNum+1;console.log(n),n%2!=0&&(n+=1),n/=2,this.BookImg=`assets/images/books/book-${n}.jpg`,console.log(n)})}ngOnInit(){window.scrollTo(0,0),this.BookID=this.activatedRoute.snapshot.url[1].path,this.getBookByID(this.BookID),console.log(this.BookItem)}getBookByID(l){return this.bookService.getBookByID(l).subscribe(l=>{this.BookItem.BookAuther=l.BookAuther,this.BookItem.BookDes=l.BookDes,this.BookItem.BookName=l.BookName,this.BookItem.BookPrice=l.BookPrice,this.BookItem._id=l._id})}}class a{}var u=e("pMnS"),i=e("SVse"),r=e("TNpa"),g=e.n(r);let c=class{constructor(){this.changePage=new o.EventEmitter(!0),this.initialPage=1,this.pageSize=10,this.maxPages=10,this.pager={}}ngOnInit(){this.items&&this.items.length&&this.setPage(this.initialPage)}ngOnChanges(l){l.items.currentValue!==l.items.previousValue&&this.setPage(this.initialPage)}setPage(l){this.pager=g()(this.items.length,l,this.pageSize,this.maxPages);var n=this.items.slice(this.pager.startIndex,this.pager.endIndex+1);this.changePage.emit(n)}},d=class{};var m=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function p(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,5,"li",[["class","page-item number-item"]],null,null,null,null,null)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](2,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pod"](3,{active:0}),(l()(),o["\u0275eld"](4,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.setPage(l.context.$implicit)&&o),o}),null,null)),(l()(),o["\u0275ted"](5,null,["",""]))],(function(l,n){var e=l(n,3,0,n.component.pager.currentPage===n.context.$implicit);l(n,2,0,"page-item number-item",e)}),(function(l,n){l(n,5,0,n.context.$implicit)}))}function k(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,26,"ul",[["class","pagination"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,5,"li",[["class","page-item first-item"]],null,null,null,null,null)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](3,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pod"](4,{disabled:0}),(l()(),o["\u0275eld"](5,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.setPage(1)&&o),o}),null,null)),(l()(),o["\u0275ted"](-1,null,["First"])),(l()(),o["\u0275eld"](7,0,null,null,5,"li",[["class","page-item previous-item"]],null,null,null,null,null)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](9,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pod"](10,{disabled:0}),(l()(),o["\u0275eld"](11,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;return"click"===n&&(o=!1!==t.setPage(t.pager.currentPage-1)&&o),o}),null,null)),(l()(),o["\u0275ted"](-1,null,["Previous"])),(l()(),o["\u0275and"](16777216,null,null,1,null,p)),o["\u0275did"](14,278528,null,0,i.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["\u0275eld"](15,0,null,null,5,"li",[["class","page-item next-item"]],null,null,null,null,null)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](17,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pod"](18,{disabled:0}),(l()(),o["\u0275eld"](19,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;return"click"===n&&(o=!1!==t.setPage(t.pager.currentPage+1)&&o),o}),null,null)),(l()(),o["\u0275ted"](-1,null,["Next"])),(l()(),o["\u0275eld"](21,0,null,null,5,"li",[["class","page-item last-item"]],null,null,null,null,null)),o["\u0275prd"](512,null,i["\u0275NgClassImpl"],i["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](23,278528,null,0,i.NgClass,[i["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pod"](24,{disabled:0}),(l()(),o["\u0275eld"](25,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;return"click"===n&&(o=!1!==t.setPage(t.pager.totalPages)&&o),o}),null,null)),(l()(),o["\u0275ted"](-1,null,["Last"]))],(function(l,n){var e=n.component,o=l(n,4,0,1===e.pager.currentPage);l(n,3,0,"page-item first-item",o);var t=l(n,10,0,1===e.pager.currentPage);l(n,9,0,"page-item previous-item",t),l(n,14,0,e.pager.pages);var s=l(n,18,0,e.pager.currentPage===e.pager.totalPages);l(n,17,0,"page-item next-item",s);var a=l(n,24,0,e.pager.currentPage===e.pager.totalPages);l(n,23,0,"page-item last-item",a)}),null)}function f(l){return o["\u0275vid"](0,[(l()(),o["\u0275and"](16777216,null,null,1,null,k)),o["\u0275did"](1,16384,null,0,i.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.pager.pages&&e.pager.pages.length)}),null)}var h=e("iInd"),b=e("Qo73"),I=o["\u0275crt"]({encapsulation:0,styles:[[".imgBox[_ngcontent-%COMP%]{position:relative;padding-bottom:9%}.imgCont[_ngcontent-%COMP%]{width:96%;height:393px;box-shadow:3px 8px 12px -4px rgba(0,0,0,.75)}.overlayImg[_ngcontent-%COMP%]{position:absolute;background-color:rgb(0,0,0,.4);background:#95adbe;opacity:.8;width:0;height:93%;top:0;right:1.9%;-webkit-transition:.3s;transition:.3s;cursor:pointer}.imgBox[_ngcontent-%COMP%]:hover   .overlayImg[_ngcontent-%COMP%]{width:96.3%}.overlayBookName[_ngcontent-%COMP%]{text-align:left;color:#fff;font-size:38px;position:absolute;bottom:12%;left:10%;padding:0 4%;display:none;z-index:2}.imgBox[_ngcontent-%COMP%]:hover   .AuthorOverlay[_ngcontent-%COMP%], .imgBox[_ngcontent-%COMP%]:hover   .overlayBookName[_ngcontent-%COMP%]{display:-webkit-box;display:flex}  .pagination{-webkit-box-pack:center;justify-content:center}.AllBookTxt[_ngcontent-%COMP%]{font-family:Philosopher,sans-serif;font-size:42px}"]],data:{}});function v(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,5,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,4,"div",[["class","imgBox"]],null,[[null,"click"]],(function(l,n,e){var o=!0,t=l.component;return"click"===n&&(o=!1!==t.OpenBook(t.BooksInfo[l.context.$implicit.id]._id,l.context.$implicit.id)&&o),o}),null,null)),(l()(),o["\u0275eld"](2,0,null,null,0,"img",[["class","imgCont"]],[[8,"src",4]],null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,0,"div",[["class","overlayImg"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"div",[["class","overlayBookName"]],null,null,null,null,null)),(l()(),o["\u0275ted"](5,null,[" "," "]))],null,(function(l,n){var e=n.component;l(n,2,0,o["\u0275inlineInterpolate"](1,"",n.context.$implicit.bookImg,"")),l(n,5,0,null==e.BooksInfo[n.context.$implicit.id]?null:e.BooksInfo[n.context.$implicit.id].BookName)}))}function B(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,9,"section",[["class","section"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,8,"div",[["class","card text-center m-3"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,1,"h3",[["class","card-header AllBookTxt"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["All books"])),(l()(),o["\u0275eld"](4,0,null,null,2,"div",[["class","card-body row"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,v)),o["\u0275did"](6,278528,null,0,i.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["\u0275eld"](7,0,null,null,2,"div",[["class","card-footer pb-0 pt-3"]],null,null,null,null,null)),(l()(),o["\u0275eld"](8,0,null,null,1,"jw-pagination",[],null,[[null,"changePage"]],(function(l,n,e){var o=!0;return"changePage"===n&&(o=!1!==l.component.onChangePage(e)&&o),o}),f,m)),o["\u0275did"](9,638976,null,0,c,[],{items:[0,"items"]},{changePage:"changePage"})],(function(l,n){var e=n.component;l(n,6,0,e.pageOfItems),l(n,9,0,e.items)}),null)}function C(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-allbooks",[],null,null,null,B,I)),o["\u0275did"](1,114688,null,0,t,[h.k,h.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var P=o["\u0275ccf"]("app-allbooks",t,C,{},{},[]),x=e("TSSN"),N=o["\u0275crt"]({encapsulation:0,styles:[[".BookImg[_ngcontent-%COMP%]{width:80%;box-shadow:-7px -12px 33px -6px rgba(0,0,0,.63);border-radius:37px}.BookName[_ngcontent-%COMP%]{font-size:88px;padding-left:6%;font-family:Philosopher,sans-serif;margin-top:12%}.BookAuth[_ngcontent-%COMP%]{font-size:38px;padding-left:6%}.BookDes[_ngcontent-%COMP%]{padding-left:6%;font-size:24px;font-weight:100;font-family:Philosopher,sans-serif;color:#778899}.row[_ngcontent-%COMP%]{margin-bottom:6%!important}"]],data:{}});function w(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,18,"section",[["class","section"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,17,"div",[["class","row"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,14,"div",[["class","col-md-7"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,1,"h1",[["class","BookName"]],null,null,null,null,null)),(l()(),o["\u0275ted"](4,null,[" ",""])),(l()(),o["\u0275eld"](5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,1,"h3",[["class","BookAuth"]],null,null,null,null,null)),(l()(),o["\u0275ted"](7,null,[" "," "])),(l()(),o["\u0275eld"](8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,2,"h3",[["class","BookDes"]],null,null,null,null,null)),(l()(),o["\u0275ted"](10,null,[" "," "])),o["\u0275pid"](131072,x.j,[x.k,o.ChangeDetectorRef]),(l()(),o["\u0275eld"](12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](13,0,null,null,2,"h3",[["class","BookAuth"]],null,null,null,null,null)),(l()(),o["\u0275ted"](14,null,[" "," : "," "])),o["\u0275pid"](131072,x.j,[x.k,o.ChangeDetectorRef]),(l()(),o["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["\u0275eld"](17,0,null,null,1,"div",[["class","col-md-5"]],null,null,null,null,null)),(l()(),o["\u0275eld"](18,0,null,null,0,"img",[["class","BookImg"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){var e=n.component;l(n,4,0,e.BookItem.BookName),l(n,7,0,e.BookItem.BookAuther),l(n,10,0,o["\u0275unv"](n,10,0,o["\u0275nov"](n,11).transform("ABOUT.DES"))),l(n,14,0,o["\u0275unv"](n,14,0,o["\u0275nov"](n,15).transform("BOOKS.COST")),e.BookItem.BookPrice),l(n,18,0,o["\u0275inlineInterpolate"](1,"",e.BookImg,""))}))}function y(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-single-book",[],null,null,null,w,N)),o["\u0275did"](1,114688,null,0,s,[b.a,h.k,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var O=o["\u0275ccf"]("app-single-book",s,y,{},{},[]),R=e("s7LF");e.d(n,"BooksModuleNgFactory",(function(){return j}));var j=o["\u0275cmf"](a,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,P,O]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[o.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,R.n,R.n,[]),o["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),o["\u0275mpd"](1073742336,h.n,h.n,[[2,h.s],[2,h.k]]),o["\u0275mpd"](1073742336,R.m,R.m,[]),o["\u0275mpd"](1073742336,R.d,R.d,[]),o["\u0275mpd"](1073742336,x.h,x.h,[]),o["\u0275mpd"](1073742336,d,d,[]),o["\u0275mpd"](1073742336,a,a,[]),o["\u0275mpd"](1024,h.i,(function(){return[[{path:"Books",component:t},{path:"SingleBook/:id",component:s}]]}),[])])}))}}]);