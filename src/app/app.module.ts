import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './products/product.component';
import {ProductsComponent} from './products/products.component';
import {ProductAddComponent} from './products/product-add.component';
import {ProductSingleComponent} from './products/product-single.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductEditComponent} from './products/product-edit.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductAddComponent,
    ProductSingleComponent,
    HeaderComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
