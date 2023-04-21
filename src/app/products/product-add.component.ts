import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../models/product.model";
import {uid} from "uid";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup = new FormGroup([]);
  uid: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
    this.uid = uid(10);
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.minLength(10)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      imageUrl: new FormControl('', Validators.required),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
      available: new FormControl(false, Validators.required),
      storeName: new FormControl('', [Validators.required, Validators.minLength(5)]),

    });
  }

  onSubmit(): void {
    const product: Product = {
      id: this.uid,
      name: (this.productForm.get('name')?.value).trim(),
      description: (this.productForm.get('description')?.value).trim(),
      price: this.productForm.get('price')?.value,
      quantity: this.productForm.get('quantity')?.value,
      available: this.productForm.get('available')?.value,
      storeName: this.productForm.get('storeName')?.value,
      imageUrl: this.productForm.get('imageUrl')?.value,
      createdAt: new Date(),
      updatedAt: null
    };
    console.log(product);
  }

}
