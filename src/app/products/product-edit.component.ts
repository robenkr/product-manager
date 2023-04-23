import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup = new FormGroup([]);
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
    this.initForm();
    this.route.paramMap.subscribe(
      token => {
        this.productId = token.get('id');

        this.patchForm();
      }
    );
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

  patchForm(): void {
    this.productForm.patchValue({
      name: this.productDraft.name,
      description: this.productDraft.description,
      price: this.productDraft.price,
      imageUrl: this.productDraft.imageUrl,
      quantity: this.productDraft.quantity,
      available: this.productDraft.available,
      storeName: this.productDraft.storeName
    });
  }

  onSubmit(): void {
    this.productDraft.name = (this.productForm.get('name')?.value).trim();
    this.productDraft.description = (this.productForm.get('description')?.value).trim();
    this.productDraft.price = this.productForm.get('price')?.value;
    this.productDraft.quantity = this.productForm.get('quantity')?.value;
    this.productDraft.available = this.productForm.get('available')?.value;
    this.productDraft.storeName = this.productForm.get('storeName')?.value;
    this.productDraft.imageUrl = this.productForm.get('imageUrl')?.value;
    this.productDraft.updatedAt = new Date();

    console.log(this.productDraft);
  }

}
