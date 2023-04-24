import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  productForm: FormGroup = new FormGroup([]);
  // @ts-ignore
  product: Product;
  subscriptions: Subscription = new Subscription();
  productId: string = '';
  updated: boolean = false;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe(
      token => {
        // @ts-ignore
        this.productId = token.get('uid');
        this.subscriptions.add(
          this.productService.getProduct(this.productId).subscribe(
            (product) => {
              if (product !== null) {
                this.product = product;

                this.patchForm(product);
              }
            }
          )
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.minLength(10)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      image: new FormControl(''),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
      available: new FormControl(false, Validators.required),
      store: new FormControl('', [Validators.required, Validators.minLength(5)]),

    });
  }

  patchForm(product: Product): void {
    this.productForm.patchValue({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      available: product.available,
      store: product.store
    });
  }

  onSubmit(): void {
    this.product.name = (this.productForm.get('name')?.value).trim();
    this.product.description = (this.productForm.get('description')?.value).trim();
    this.product.price = this.productForm.get('price')?.value;
    this.product.quantity = this.productForm.get('quantity')?.value;
    this.product.available = this.productForm.get('available')?.value;
    this.product.store = this.productForm.get('store')?.value;
    if (this.productForm.get('image')?.value !== '') {
      this.product.image = this.productForm.get('image')?.value;
    }
    this.product.updated_at = new Date();

    console.log(this.product);
    this.subscriptions.add(
      this.productService.updateProduct(this.product).subscribe(
        (res) => {
          console.log('#After Update> ', res);
        })
    );
  }

}
