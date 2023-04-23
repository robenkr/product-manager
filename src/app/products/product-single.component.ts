import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {

  productDraft: Product = {
    id: '1',
    name: 'Product 1',
    description: ' Product 1 - description',
    price: 10,
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    quantity: 100,
    storeName: 'Ampire Store',
    createdAt: new Date(),
    updatedAt: null
  };
  subscriptions: Subscription = new Subscription();
  productId: string | null = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      token => {
        this.productId = token.get('id');
      }
    );
  }

}
