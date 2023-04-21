import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
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
    },
    {
      id: '2',
      name: 'Product 2',
      description: ' Product 2 - description',
      price: 100,
      available: false,
      imageUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      quantity: 100,
      storeName: 'Ampire Store',
      createdAt: new Date(),
      updatedAt: null
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
