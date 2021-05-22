import { CataloguesComponent } from './catalogues.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CataloguesRoutingModule } from './catalogues-routing.module';
import {NgxPaginationModule} from "ngx-pagination";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [CataloguesComponent],
  imports: [
    CommonModule,
    CataloguesRoutingModule,
    NgxPaginationModule,
    ComponentsModule
  ]
})
export class CataloguesModule { }
