import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services';
import { bookModel } from 'src/app/core/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  BookItem :bookModel = {
    BookAuther : "",
    BookDes : "",
    BookName: "",
    BookPrice : "",
    _id : ""
   };
   
  BookID :string;
  BookImg = "";
  items= [
    {
      id: 1,
      name: 'item1',
      bookImg : 'assets/images/books/book-1.jpg',
      Aurthor  : 'John Nathan Muller',
      aboutBook : 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  ];
constructor(private bookService:BookService, private router: Router,
  private activatedRoute: ActivatedRoute) {
    window.scrollTo(0,0);
    this.activatedRoute.queryParams.subscribe(params => {
      let ImgNum =  +params['ImgNum'] + 1;
      console.log(ImgNum);
      
      if(ImgNum % 2  != 0){
        ImgNum = ImgNum +1; 
      }
        ImgNum = ImgNum/2 ; 
      
      
      this.BookImg = `assets/images/books/book-${ImgNum}.jpg`;
      console.log(ImgNum); // Print the parameter to the console. 
  });

}

ngOnInit() {
  window.scrollTo(0,0);
  this.BookID = this.activatedRoute.snapshot.url[1].path;
  this.getBookByID(this.BookID);
   console.log(this.BookItem);
  }

  getBookByID(id:string){
    return this.bookService.getBookByID(id).subscribe((data:bookModel)=>{
      this.BookItem.BookAuther = data.BookAuther;
      this.BookItem.BookDes = data.BookDes;
      this.BookItem.BookName = data.BookName;
      this.BookItem.BookPrice = data.BookPrice;
      this.BookItem._id = data._id;
    });
  }

}
