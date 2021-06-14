import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UtilsService } from './utils.service';

export interface Banner {
  createdAt: string;
  id: number
  name: string
  photo: string
  position: string
}

@Injectable({
  providedIn: 'root',
})
export class BannerService {

  constructor(private readonly utilsService: UtilsService) { }

  getAllBanners(): Observable<Banner[]> {
    return this.utilsService.get(UtilsService.API_BANNIERE)
      .pipe(
        map(({ data }) => data.data),
      );
  }

  getBannerById(id): Observable<Banner> {
    return this.utilsService.get(UtilsService.API_BANNIERE + id)
      .pipe(
        map(({ data }) => data.data),
      );
  }
}
