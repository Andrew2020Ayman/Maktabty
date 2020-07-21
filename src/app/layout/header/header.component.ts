import { Component, OnInit, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnChanges{
 
  IsLogin = false;
  AuthName = '';
  currentLangEn = true;
  public isMenuOpen: boolean = false;
  constructor( private translate: TranslateService ,
     private authService:AuthenticationService,
     private router:Router
     ) { 
       console.log(this.IsLogin);
       console.log(this.AuthName);
       
     }
  
  ngOnInit() {
     this.authService.getValueOfBoolAuth().subscribe(res=>{
      this.IsLogin = res;
    });

  this.authService.getValueOfName().subscribe(res=>{
  this.AuthName = res;
  });
  console.log(this.AuthName);
  }
 ngOnChanges(){
  this.authService.getValueOfBoolAuth().subscribe(res=>{
    this.IsLogin = res;
  });

  this.authService.getValueOfName().subscribe(res=>{
  this.AuthName = res;
  });
  console.log(this.AuthName);
  
 }

  trans(){
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl'); 
    if(this.currentLangEn){
        this.translate.use('ar');
        this.currentLangEn = false;
    }
    else if( !this.currentLangEn){
      this.translate.use('en');
      this.currentLangEn = true;
    }
  
  }

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  GoHome(){
    this.router.navigate(['#home-section']);
  }

  LogOut(){
    this.authService.logout();
  }
}
