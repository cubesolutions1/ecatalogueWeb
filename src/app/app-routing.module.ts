import { PdfshowModule } from './pages/pdfshow/pdfshow.module';
import { DetailproduitComponent } from './pages/detailproduit/detailproduit.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { LoginComponent } from './Auth/login/login.component';
import { CataloguesComponent } from './pages/catalogues/catalogues.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForgotComponent } from './Auth/forgot/forgot.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductDetailsResolver } from './pages/detailproduit/datailproduit.resolver';

const routes: Routes = [{
  path: '', component: HomeComponent,
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},
{
  path: 'register', component: RegisterComponent,
  // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
}
  , {
  path: 'forgot',
  loadChildren: () => import('./Auth/forgot/forgot.module').then(m => m.ForgotModule)
},
{
  path: 'contact',
  loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
}, {
  path: 'catalogues',
  loadChildren: () => import('./pages/catalogues/catalogues.module').then(m => m.CataloguesModule)
},

// {
//   path: 'login', component: LoginComponent,
//   // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
// },
{
  path: 'venteflash',
  loadChildren: () => import('./pages/produits/produits.module').then(m => m.ProduitsModule)
},
{
  path: 'pdf',
  loadChildren: () => import('./pages/pdfshow/pdfshow.module').then(m => m.PdfshowModule)
},
{
  path: 'detailproduit/:idproduit',
  loadChildren: () => import('./pages/detailproduit/detailproduit.module').then(m => m.DetailproduitModule),
  resolve: {
    data: ProductDetailsResolver
  }
},
{
  path: '**', redirectTo: '', pathMatch: 'full',
}];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }







