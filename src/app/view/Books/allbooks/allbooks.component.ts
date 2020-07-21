import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../../core/services';
import { bookModel } from 'src/app/core/models';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  BooksInfo =[];
  items = [
     {
       id:0,
       bookImg : "assets/images/books/book-1.jpg",
     },
     {
      id:1,
      bookImg : "assets/images/books/book-1.jpg"
    },
    {
      id:2,
      bookImg : "assets/images/books/book-2.jpg"
    },
    {
      id:3,
      bookImg : "assets/images/books/book-2.jpg"
    },
    {
      id:4,
      bookImg : "assets/images/books/book-3.jpg"
    },
    {
      id:5,
      bookImg : "assets/images/books/book-3.jpg"
    },
    {
      id:6,
      bookImg : "assets/images/books/book-4.jpg"
    },
    {
      id:7,
      bookImg : "assets/images/books/book-4.jpg"
    },
    {
      id:8,
      bookImg : "assets/images/books/book-5.jpg"
    },
    {
      id:9,
      bookImg : "assets/images/books/book-5.jpg"
    },
    {
      id:10,
      bookImg : "assets/images/books/book-6.jpg"
    },
    {
      id:11,
      bookImg : "assets/images/books/book-6.jpg"
    },
    {
      id:12,
      bookImg : "assets/images/books/book-7.jpg"
    },
    {
      id:13,
      bookImg : "assets/images/books/book-7.jpg"
    },
    {
      id:14,
      bookImg : "assets/images/books/book-8.jpg"
    },
    {
      id:15,
      bookImg : "assets/images/books/book-8.jpg"
    },
    {
      id:16,
      bookImg : "assets/images/books/book-9.jpg"
    },
    {
      id:17,
      bookImg : "assets/images/books/book-9.jpg"
    },
    {
      id:18,
      bookImg : "assets/images/books/book-10.jpg"
    },
    {
      id:19,
      bookImg : "assets/images/books/book-10.jpg"
    }
   ];
  pageOfItems: Array<any>;
 
 
  constructor( private router: Router ,  private _route: ActivatedRoute, private bookService:BookService ) { 
    window.scrollTo(0,0);
  }

  ngOnInit() {
    window.scrollTo(0,0);
    
    this.GetBooks(); 
  console.log(this.BooksInfo);

  }

  GetBooks(){
    this.bookService.get().subscribe(data=>{
      
      let Bookslength = data.length;
       for (let index = 0; index < Bookslength; index++) {
  
        this.BooksInfo.push(data[index]);
      } 
    });

  }
 
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items

    window.scrollTo(0,0);
    this.pageOfItems = pageOfItems;
}


OpenBook(id , ImgNumber:string){
  console.log(id);
  this.router.navigate([`SingleBook/${id}`], { queryParams: { ImgNum: ImgNumber } });
}

}
