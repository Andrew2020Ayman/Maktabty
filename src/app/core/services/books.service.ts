import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { HttpParams } from '@angular/common/http';
import { bookModel } from '../models';

@Injectable()
export class BookService {


    constructor(private apiService: ApiService,) { }

    get(): Observable<bookModel[]> {
        return this.apiService.get('/books')
             .pipe(map(data => data)); 
    }

    getBookByID(id: string): Observable<bookModel> {
        return this.apiService.get('/books/'+ id)
             .pipe(map(data => {return data;})); 
    }
}