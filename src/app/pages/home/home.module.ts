import { VenteflashComponent } from './venteflash/venteflash.component';
import { SliderComponent } from './slider/slider.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { NotificationComponent } from './notification/notification.component';
import { EnseigneComponent } from './enseigne/enseigne.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CataloguevisiteComponent } from './cataloguevisite/cataloguevisite.component';
import { CataloguepromoComponent } from './cataloguepromo/cataloguepromo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {ComponentsModule} from "../../components/components.module";
import {NgxPaginationModule} from "ngx-pagination";
import {CarouselModule} from "ngx-owl-carousel-o";
import {AppModule} from "../../app.module";
import {CountdownModule} from "ngx-countdown";
import {SkeletonComponent} from "../../components/skeleton/skeleton.component";


@NgModule({
  declarations: [HomeComponent,
    CataloguepromoComponent,
    CataloguevisiteComponent,
    CategorieComponent,
    EnseigneComponent,
    NotificationComponent,
    PromotionsComponent,
    SliderComponent,
    VenteflashComponent,
    // SkeletonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NgxPaginationModule,
    CarouselModule,
    CountdownModule,
    // SkeletonComponent
  ]
})
export class HomeModule { }
