import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private utilsService: UtilsService) { }
  public getMe() {
    return this.utilsService.get(UtilsService.API_USER + 'Me').pipe(map((res: any) => {
      console.log(res);
      return res.data.data
    }, err => {
      console.log(err);
    }
    ));
  }
  public signUp(object) {
    return this.utilsService.post(UtilsService.API_USER + 'signup',object).pipe(map((res: any) => {
      console.log(res);
      return res.data.data
    }, err => {
      console.log(err);
    }
    ));
  }
}
