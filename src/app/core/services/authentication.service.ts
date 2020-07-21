import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError ,BehaviorSubject} from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login,Register } from '../models';
import { HttpResponse, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthenticationService  implements OnInit{
  authBool = false;
  private authName: BehaviorSubject<string>;
  private IsLogged: BehaviorSubject<boolean>;
  constructor(
    private apiService: ApiService,
    private jwtHelper: JwtHelperService,
    private _HttpClient : HttpClient
  ) {
    if(localStorage.getItem("access_token") === null && localStorage.getItem("FirstName")===null){
      this.authName = new BehaviorSubject<string>('');
    this.IsLogged = new BehaviorSubject<boolean>(false);
    }
    else{
      this.authName = new BehaviorSubject<string>(localStorage.getItem("FirstName"));
      this.IsLogged = new BehaviorSubject<boolean>(true);
    }
  }

  ngOnInit(){
    if(localStorage.getItem("access_token") === null && localStorage.getItem("FirstName")===null){
      this.authName = new BehaviorSubject<string>('');
    this.IsLogged = new BehaviorSubject<boolean>(false);
    }
    else{
      this.authName = new BehaviorSubject<string>(localStorage.getItem("FirstName"));
      this.IsLogged = new BehaviorSubject<boolean>(true);
    }
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  getValueOfName(): Observable<string> {
    return this.authName.asObservable();
  }
  getValueOfBoolAuth(): Observable<boolean> {
    return this.IsLogged.asObservable();
  }
  setValue(newValue  , newBool): void {
    this.authName.next(newValue);
    this.IsLogged.next(newBool);
  }

  get():Observable<any>{
      return this.apiService.get('/users').pipe(map(data=>{
          console.log(data);
          
      }))
  }
 
  getUser(refreshToken:any , id:any):Observable<any>{

  let headerDict = {
    'x-access-token' : `${refreshToken}`,
    '_id': `${id}`,
  }
  let headers  = new HttpHeaders(headerDict);
  return this.apiService
  .getHead('/users/login/'+id.toString(), headers )
  .pipe(map(data=>data)); 
}
 

  login(login:Login): Observable<any> {
    console.log("login from auth");
     return this.apiService
      .post('/userLogin/login', login)
      .pipe(map(data=>data)); 
  } 

getAccessToken(refreshToken:any , id:any):Observable<any>{

  let headerDict = {
    'x-refresh-token' : `${refreshToken}`,
    '_id': `${id}`,
  }


  let headers  = new HttpHeaders(headerDict);
  

  
  return this.apiService
  .getHead('/userLogin/me/access-token', headers )
  .pipe(map(data=>data)); 
}

  register(register:Register):Observable<any>{
    /* let regJSON = JSON.stringify(register) */
    return this.apiService
    .post('/users/add', register )
    .pipe(map(data=>data));
  }

  isLoggedIn() {
    // check user is logged
    if(localStorage.getItem("access_token") === null && localStorage.getItem("FirstName")===null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(): void {
    // clear token  from local storage to log user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('FirstName');
    this.setValue( '' , false);
  }


}
