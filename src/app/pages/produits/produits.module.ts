import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitsComponent} from './produits.component'
import { ProduitsRoutingModule } from './produits-routing.module';
import {NgxPaginationModule} from "ngx-pagination";
import { CountdownModule } from 'ngx-countdown';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [ProduitsComponent],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    NgxPaginationModule,
    CountdownModule,
    ComponentsModule
  ]
})
export class ProduitsModule { }
