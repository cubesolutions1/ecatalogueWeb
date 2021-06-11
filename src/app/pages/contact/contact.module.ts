import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact.component'
import { ContactRoutingModule } from './contact-routing.module';
import {ComponentsModule} from "../../components/components.module";
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ComponentsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-YHD1VLiZyKln_hC24GLpp2eNrq4ZTcc'
    }),
    
  ]
})
export class ContactModule { }
