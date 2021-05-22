import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CataloguesComponent} from "../catalogues/catalogues.component";
import {ProduitsComponent} from "./produits.component";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '', component: ProduitsComponent,
      // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
