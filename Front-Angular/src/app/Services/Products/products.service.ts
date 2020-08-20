import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsModel } from 'src/app/Models/Products/products-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _IProducts: ProductsModel[];

  readonly ApiPath= '/API/Products';

  constructor(private http: HttpClient) {
  }

  //Getting ProductData through httpClient of Angular -> ApiPath 

  getProducts(): Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(this.ApiPath);  
  }

  getProductsById(Id: Number): Observable<ProductsModel>{
    return this.http.get<ProductsModel>(`${this.ApiPath}/${Id}`);
  }

  postProducts(_IProductModel: ProductsModel): Observable<ProductsModel>{
    return this.http.post<ProductsModel>(this.ApiPath, _IProductModel)
      .pipe(
        map(Product => {
          return Product;
        }
      ));
  }

  putProducts(_IProductModel: ProductsModel): Observable<ProductsModel>{
    return this.http.put<ProductsModel>(`${this.ApiPath}/${_IProductModel.codigo}`,  _IProductModel);
  }
  
  deleteProducts(IdEmpDelete : number): Observable<any>{
    return this.http.delete<any>(`${this.ApiPath}/${IdEmpDelete}`);
  }
}
