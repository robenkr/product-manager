import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductAddComponent} from './products/product-add.component';
import {ProductsComponent} from './products/products.component';
import {ProductEditComponent} from "./products/product-edit.component";
import {ProductSingleComponent} from "./products/product-single.component";

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'add',
        component: ProductAddComponent
      },
      {
        path: ':uid',
        children: [
          {
            path: '',
            component: ProductSingleComponent
          },
          {
            path: 'edit',
            component: ProductEditComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
