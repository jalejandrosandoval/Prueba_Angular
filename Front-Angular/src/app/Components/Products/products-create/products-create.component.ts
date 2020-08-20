import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/Services/Products/products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  ProductsCreateForm = this.formBuilder.group({
    descripcion: [''],
    valor: ['']
  });

  onCreate(){

      this.productsService.postProducts(this.ProductsCreateForm.value)
        .subscribe(  
        res => {
          this.toastr.success("¡Creación Exitosa!", "Productos:"), 
          this.ProductsCreateForm.reset(),
          this.router.navigate(["/products"]);
        },
        error => this.getError(error)  
        );

    

    console.log(Object.values(this.ProductsCreateForm));
  }
  
  get ProductCreateFormData() { 
    return this.ProductsCreateForm.controls; 
  }

  getError(_Error){

    if (_Error && _Error.error) {

      this.ProductsCreateForm.reset;
      
      return this.toastr.warning(_Error.error[""], "Error");
      
    }
   
  }
  
}
