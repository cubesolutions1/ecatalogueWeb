import { CataloguesComponent } from './catalogues.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '', component: CataloguesComponent,
      // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
    },
    {
      path: ':idenseigne/enseigne/:enseignesName', component: CataloguesComponent,
      // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
    },
    {
      path: ':idCategorie/:categoriesName', component: CataloguesComponent,
      // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CataloguesRoutingModule { }
