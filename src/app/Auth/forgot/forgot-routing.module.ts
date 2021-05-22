import { ForgotComponent } from './forgot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: ForgotComponent,

      }, {
        path: ':codetoken', component: ForgotComponent,

      },

    ]


  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotRoutingModule { }
