import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoumasComponent } from './components/loumas/loumas.component';


const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'loumas', component: LoumasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
