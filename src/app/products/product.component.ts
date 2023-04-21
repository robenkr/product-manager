import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
