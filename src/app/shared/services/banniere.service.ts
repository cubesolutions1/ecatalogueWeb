import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BanniereService {

  constructor(private utilsService: UtilsService) { }
  public getAllBannieres() {
    return this.utilsService.get(UtilsService.API_BANNIERE )
      .pipe(map((res: any) => {
        // console.log(res);
        return res.data.data
      }, err => {
        console.log(err);
      }
      ));
  }
  public getBanniereById(id) {
    return this.utilsService.get(UtilsService.API_BANNIERE + id).pipe(map((res: any) => {
      // console.log(res);
      return res.data.data
    }, err => {
      console.log(err);
    }
    ));
  }
}
