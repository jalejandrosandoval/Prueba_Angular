import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/Products/products.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsModel } from 'src/app/Models/Products/products-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  _IProduct: ProductsModel [];
  _ProductSelected: ProductsModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.getData();    
  }

  //Getting Employees Informations from WebAPI

  getData() {
    this.productService
      .getProducts()
      .subscribe(product_AWS => this._IProduct = product_AWS,
        error => this.getError(error)
        );
  }

  ProductsViewForm = this.formBuilder.group({
    codigo: [''],
    descripcion: [''],
    valor: ['']
  });

  
  getDataByIdModal(_IProduct: ProductsModel){

    var _Codigo= _IProduct.codigo;

    this.productService.getProductsById(_Codigo).subscribe(
      res => 
      {
        this._ProductSelected =  res,
        this.ProductsViewForm = this.formBuilder.group({
          codigo: [this._ProductSelected.codigo],
          descripcion: [this._ProductSelected.descripcion],
          valor: [this._ProductSelected.valor]
        }),
        error => this.getError(error) 
      }
    );   

  }

  preUpdate(_IProduct: ProductsModel){

    var codigo = _IProduct.codigo;

    var ruta = `products/edit/`;

    this.router.navigateByUrl(ruta + `${codigo}`);
  }

  preDelete(_IProduct: ProductsModel){

    this.productService.deleteProducts(_IProduct.codigo).subscribe(
      res =>
      {
        this.toastr.show("¡Eliminación Exitosa!", "Eliminación de Productos:")
      }
    );
    location.reload();
  }

  getError(_Error){

    if (_Error && _Error.error) {
      
      return this.toastr.warning(_Error.error[""], "Error en la Carga de Datos");
      
    }
  }

}
