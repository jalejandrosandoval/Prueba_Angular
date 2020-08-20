//MODULES
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//TOASTR
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Products

import { ProductsComponent } from './Components/Products/products/products.component';

//Home
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/Menu/navbar/navbar.component';

//SERVICES

import { ProductsService } from './Services/Products/products.service';
import { ProductsCreateComponent } from './Components/Products/products-create/products-create.component';
import { ProductsEditComponent } from './Components/Products/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]), 
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: "toast-top-right"
    }),
    HttpClientModule    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
