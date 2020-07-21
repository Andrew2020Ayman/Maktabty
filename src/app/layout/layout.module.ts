import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';

import { MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        
        CommonModule,
        FormsModule,
        TranslateModule,
        RouterModule,
        MatSidenavModule,
    MatIconModule,
    MatButtonModule
    ],
    exports:[
        HeaderComponent , FooterComponent
    ],
    declarations: [HeaderComponent , FooterComponent]
})
export class LayoutModule { }
