import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../models/product.model";
import {uid} from "uid";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup = new FormGroup([]);
  uid: string = '';

  constructor(private productsService: ProductsService) {
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
      image: new FormControl('', Validators.required),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
      available: new FormControl(false, Validators.required),
      store: new FormControl('', [Validators.required, Validators.minLength(5)]),

    });
  }

  onSubmit(): void {
    const product: Product = {
      uid: this.uid,
      name: (this.productForm.get('name')?.value).trim(),
      description: (this.productForm.get('description')?.value).trim(),
      price: this.productForm.get('price')?.value,
      quantity: this.productForm.get('quantity')?.value,
      available: this.productForm.get('available')?.value,
      store: this.productForm.get('store')?.value,
      image: this.productForm.get('image')?.value,
      created_at: new Date(),
      updated_at: null
    };
    console.log(product);

    this.productsService.addProduct(product).subscribe((res) => {
      console.log('#After ADD=> ', res);
      this.productForm.reset();
    });
  }

}
