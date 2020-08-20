import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Home

import { HomeComponent } from './Components/home/home.component';

//Products

import { ProductsComponent } from './Components/Products/products/products.component';
import { ProductsCreateComponent } from './Components/Products/products-create/products-create.component';
import { ProductsEditComponent } from './Components/Products/products-edit/products-edit.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'products',  component: ProductsComponent },
  { path: 'products/create',  component: ProductsCreateComponent },
  { path: 'products/edit/:codigo',  component: ProductsEditComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
