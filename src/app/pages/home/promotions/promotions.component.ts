import { Component, OnInit } from '@angular/core';

import { Banner, BannerService } from '../../../shared/services/banner.service';
import { ApiService } from '../../../shared/services/api.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
})
export class PromotionsComponent implements OnInit {
  banniere1: Banner;
  banniere2: Banner;
  apiUrl: string;

  constructor(
    private apiService: ApiService,
    private bannerService: BannerService,
  ) {
    this.apiUrl = environment.apiImg + 'Banniere/';
  }

  ngOnInit() {
    this.bannerService.getAllBanners().subscribe(banners => {
      this.banniere1 = banners.find(({ position }) => position === 'banniere1');
      this.banniere2 = banners.find(({ position }) => position === 'banniere2');
    })
  }

  viewEvent(id: number) {
    const body = {
      clicsNb: 1,
      appType: 'web'
    }
    this.apiService.post(`bannieres/${id}/clics`, body).subscribe()
  }
}
