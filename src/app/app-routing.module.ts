import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductAddComponent} from './products/product-add.component';
import {ProductSingleComponent} from './products/product-single.component';
import {ProductsComponent} from './products/products.component';

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
        path: ':id',
        component: ProductSingleComponent
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
