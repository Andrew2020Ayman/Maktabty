import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit  {

  

  booksRelease = [
    {

      bookImg : '../../../assets/images/books/book-1.jpg',
      bookName: 'You Are Your Only Limit',
      bookAuth : 'John Nathan Muller'
    },
    {
      bookImg : '../../../assets/images/books/book-2.jpg',
      bookName: '101 Essays That Will Change The Way Your Thinks',
      bookAuth: 'John Nathan Muller'
    },
    {
      bookImg : '../../../assets/images/books/book-3.jpg',
      bookName: 'Your Soul Is A River',
      bookAuth: 'John Nathan Muller'
    }
  ];

  CustWords = [
    {
      txt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.',
      name : ' Roger Scott',
      jobTitle: 'Marketing Manager',
      personImg : '../../../assets/images/users/person_1.jpg'
    },
    {
      txt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.',
      name : ' Roger Scott',
      jobTitle: 'Marketing Manager',
      personImg : '../../../assets/images/users/person_2.jpg'
    },
    {
      txt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.',
      name : ' Roger Scott',
      jobTitle: 'Marketing Manager',
      personImg : '../../../assets/images/users/person_3.jpg'
    },
    {
      txt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.',
      name : ' Roger Scott',
      jobTitle: 'Marketing Manager',
      personImg : '../../../assets/images/users/person_4.jpg'
    },
    {
      txt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.',
      name : ' Roger Scott',
      jobTitle: 'Marketing Manager',
      personImg : '../../../assets/images/users/person_4.jpg'
    },
    {
      txt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.',
      name : ' Roger Scott',
      jobTitle: 'Marketing Manager',
      personImg : '../../../assets/images/users/person_4.jpg'
    }

  ];
  customOptions: any = {
    rtl: false,
    loop: true,
    dots: true,
    navSpeed: 5000,
    autoplay: true,
    autoplaySpeed: 5000,
    responsiveClass: true,
    items: 3,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    }
  };

  /* false Means ltr direction */
  WindowDirection = false;
  constructor( private router: Router) { }


  ngOnInit() {

    this.customOptions = {
      rtl: false,
      loop: true,
      dots: true,
      navSpeed: 700,
      autoplay: true,
      autoplaySpeed: 100,
      responsiveClass: true,
      items: 3,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    }
    };

  }

  ngAfterViewInit(){
    const d = $('.home').css('direction');
    console.log( d);

 console.log(  this.customOptions.rtl);
 

    $('body').on('DOMSubtreeModified', '.home', ()=>{
      const Windirection = $('.home').css('direction');
      if(Windirection === 'ltr') {
        $('.owl-theme').data('owl.carousel').options.rtl = false;
      } 
      else if(Windirection === 'rtl'){
        $('.owl-theme').data('owl.carousel').options.rtl = true;
      }
      $('.owl-carousel').trigger( 'refresh.owl.carousel' );
      
    });
  }

  GoToBooks(){
 this.router.navigateByUrl('/Books')
  }
}
