import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiService,
  BookService
} from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
@NgModule({
  imports: [CommonModule],
  providers: [
   
    ApiService,
    BookService,
    AuthenticationService
  ],
  declarations: [],
  exports: []
})
export class CoreModule {}
