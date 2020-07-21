import { Component, OnInit } from '@angular/core';
import {Login , Register} from '../../core/models'
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from "ngx-toastr";

/* export class User {
  public email: string;
  public password: string;
}

export class NewUser {
  public FirstName: string;
  public LastName: string;
  public email: string;
  public password: string;
} */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : Login;
  NewModel : Register;
  logBool = true;

  authBool = false;
  AuthName = '';


  constructor( 
    public authenticationService: AuthenticationService ,
    private router:Router,
    private jwtHelper: JwtHelperService,
    private toastr: ToastrService
    ) { 
  /*   this.model = { email: 'test1@test.com',password: '12345678' }; */
  this.model = { email: 'Andrewreg@test.com',password: '12345678' };
   /*  this.NewModel = { Firstname: '', LastName: '' ,MyBooks : [] , LoginID : ''}; */
   this.NewModel = { Firstname: "david", LastName: "dd"  , email:"david20@test.com", password : "00000000"};
 
  }

  ngOnInit() {
  
  }


 
  onSubmit(form: NgForm){
   
    if (!(this.authenticationService.isLoggedIn())) {
    
        if (form.valid) {

        this.authenticationService.login(this.model).subscribe(
            res => {
              console.log(res);
              
              const loginId = res._id; 
              const sessionLength = res.sessions.length;
              const last_Session_Token = res.sessions[sessionLength-1].token;
              
                var token = '';
              this.authenticationService.getAccessToken(last_Session_Token,loginId).subscribe( accessTok=>{
              
                token= accessTok.accessToken;
                localStorage.setItem('access_token', token);
                  token = localStorage.getItem("access_token");
                 
                    this.authenticationService.getUser(token,loginId).subscribe(res =>{
                      localStorage.setItem('FirstName', res[0].Firstname);
                      this.toastr.success('Welcome Back '+ res[0].Firstname);
                      this.authenticationService.setValue( localStorage.getItem("FirstName") , true);
                     });
              }); 
 
            
              this.router.navigate(['/Books']); 
            },
            error => {
              this.toastr.error('Login Failed');
            }
        ); 
    }
    }else{
      this.toastr.warning('Already Login');
    }
    
  }

  onReg(form: NgForm){
    if (!(this.authenticationService.isLoggedIn())) {
          if (form.valid) {
          
      this.authenticationService.register(this.NewModel).subscribe(
          res => {
                  
            const loginId = res._id; 
            const sessionLength = res.sessions.length;
            const last_Session_Token = res.sessions[sessionLength-1].token;
            
           let token;
           this.authenticationService.getAccessToken(last_Session_Token,loginId).subscribe( accessTok=>{

               token= accessTok.accessToken;
               localStorage.setItem('access_token', token);
               this.authenticationService.getUser(token,loginId).subscribe(res =>{
                localStorage.setItem('FirstName', res[0].Firstname);
                this.toastr.success('Welcome '+ res[0].Firstname);
                this.authenticationService.setValue( localStorage.getItem("FirstName"),true);
               });
            });  

            this.router.navigate(['/Books']); 
          },
          error => {
            this.toastr.error('Register Failed');
          }
      );
  }
    }else{
      this.toastr.warning('Already Login');
    }

  }

  Reg(){
  this.logBool = !this.logBool;
  }

 /*  GetUserByID(id){
   this.authenticationService.getUser(id).pipe(map(data=>data))
  } */
}
