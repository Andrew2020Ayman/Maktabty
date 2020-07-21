import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { SingleBookComponent } from './single-book/single-book.component';
/*  import { JwPaginationComponent } from 'jw-angular-pagination';  */
import { JwPaginationModule } from 'jw-angular-pagination';


const routes: Routes = [
    {path: 'Books' , component: AllbooksComponent},
    {path: 'SingleBook/:id', component: SingleBookComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        TranslateModule,
        JwPaginationModule
    ],
    declarations: [AllbooksComponent, SingleBookComponent]
})
export class BooksModule { }
