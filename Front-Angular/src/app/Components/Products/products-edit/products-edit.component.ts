import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsModel } from 'src/app/Models/Products/products-model';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  _ProductSelected: ProductsModel;
  ProductEditForm : FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const codigo = this.route.snapshot.params['codigo'];

    this.setForm(codigo);

  }
  
  private setForm(_codigo: Number){

    this.productService.getProductsById(_codigo).subscribe(
      res => 
      {
        this._ProductSelected = res,
        this.ProductEditForm = this.formBuilder.group({
          codigo: [this._ProductSelected.codigo],
          descripcion: [this._ProductSelected.descripcion, {
            Validators: [Validators.required]
          }],
          valor: [this._ProductSelected.valor, {
            Validators: [Validators.required]
          }]
        })
      }
    );
      
  }

  get ProductEditFormData() { 
    return this.ProductEditForm.controls; 
  }


}
