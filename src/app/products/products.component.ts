import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  errorMessage = '';
  products$ = this.productService.products$
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return of(null);
      })
    );

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
  }

}
