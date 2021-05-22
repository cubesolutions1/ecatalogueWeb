import { NavbarComponent } from './navbar/navbar.component';
import { MobileComponent } from './mobile/mobile.component';
import { FooterComponent } from './footer/footer.component';
import { LoginBllockComponent } from './loginBllock/loginBllock.component';
import { FavorisComponent } from './favoris/favoris.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CatalogueBlockComponent } from "./catalogueBlock/catalogueBlock.component";
import { FormsModule } from "@angular/forms";
import { SkeletonComponent } from "./skeleton/skeleton.component";
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [CatalogueBlockComponent,
    FavorisComponent,
    FooterComponent,
    LoginBllockComponent,
    MobileComponent,
    NavbarComponent,
    NotificationComponent,
    SkeletonComponent
  ],
  exports: [CatalogueBlockComponent,
    SkeletonComponent,
    FavorisComponent,
    FooterComponent,
    LoginBllockComponent,
    MobileComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,

  ]
})
export class ComponentsModule {
}
