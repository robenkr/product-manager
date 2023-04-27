import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit, OnDestroy {

  // @ts-ignore
  product: Product;
  subscriptions: Subscription = new Subscription();
  productId: string = '';

  constructor(private route: ActivatedRoute,
              private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      token => {
        // @ts-ignore
        this.productId = token.get('uid');
        this.subscriptions.add(
          this.productService.getProduct(this.productId).subscribe(
            (product) => {
              if (product !== null) {
                this.product = product;
              }

            })
        );

      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
