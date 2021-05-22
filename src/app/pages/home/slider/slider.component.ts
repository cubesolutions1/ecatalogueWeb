import { BanniereService } from './../../../shared/services/banniere.service';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../shared/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  categories: any = []
  bannieres: any = []
  apiUrl: string
  loading: boolean = true
  @Input() src;
  CarouselOptions = { items: 3, dots: true, nav: true };
  SlideOptions: OwlOptions = {
    items: 3,
    dots: false,
    nav: false,
    loop: true,

    autoplay: true,
    // navText: ["  <i class='icon-angle-left text-50'></i>"
    //   , "<i class='icon-angle-right text-50'></i>   "],
    navSpeed: 600,
  };
  constructor(private apiSer: ApiService,
    private bannService: BanniereService) {
    this.apiUrl = environment.apiImg + 'Banniere/'
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoWidth: true,
    autoHeight: true,
    dots: true,
    navSpeed: 600,
    navText: ["  <i class='icon-angle-left text-50'></i>"
      , "<i class='icon-angle-right text-50'></i>   "],
    // navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }
  ngOnInit() {
    this.getBanniere()
  }
  getBanniere() {
    return new Promise(resolve => {
      this.bannService.getAllBannieres().subscribe((data: any) => {
        this.bannieres = data.filter(dataa => dataa.position === 'slider1' || dataa.position === 'slider2' || dataa.position === 'slider3')
        // console.log(this.bannieres);
        resolve(this.bannieres)
      })
    })
  }
  onLoad() {
    this.loading = false;
  }
}
