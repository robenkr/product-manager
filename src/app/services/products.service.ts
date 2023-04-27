import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, shareReplay} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URI: string = 'http://localhost:3000/api/products/';

  handlerError: any = '';
  products$: Observable<Product[]> = this.http.get<Product[]>(this.URI)
    .pipe(
      shareReplay(1),
      catchError(this.handlerError)
    );

  constructor(private http: HttpClient) {
  }

  getProduct(uid: string): Observable<Product> {
    return this.http.get<Product>(this.URI + uid)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URI, product)
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.put<void>(this.URI + product.uid, product);
  }

  deleteProduct(uidProduct: string) {
    return this.http.delete(this.URI + uidProduct)
  }

}
