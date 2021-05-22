import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProduitsComponent} from "../produits/produits.component";
import {DetailproduitComponent} from "./detailproduit.component";

const routes: Routes = [{


  path: '', component: DetailproduitComponent,
  // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailproduitRoutingModule {
}
