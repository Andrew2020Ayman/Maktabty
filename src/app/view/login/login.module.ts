import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {path: '' , component: LoginComponent},
  
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        TranslateModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
