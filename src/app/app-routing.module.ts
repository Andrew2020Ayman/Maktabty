import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    loadChildren: './view/Books/Books.module#BooksModule',
  },
  {
  path: 'login',
  loadChildren: './view/login/login.module#LoginModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
