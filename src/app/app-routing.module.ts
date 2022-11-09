import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { DeleteProductComponent } from './Components/delete-product/delete-product.component';
import { SearchProductComponent } from './Components/search-product/search-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

const routes: Routes = [
  { path: 'add', component: AddProductComponent},
  { path: "update", component: UpdateProductComponent },
  { path: "search", component: SearchProductComponent },
  { path: "delete", component: DeleteProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
