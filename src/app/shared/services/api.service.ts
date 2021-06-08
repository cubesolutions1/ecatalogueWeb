import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private roles: Array<any> = [];
  constructor(private http: HttpClient, private route: Router) {
  }


  getIdsociete() {
    const currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'));
    if (currentAdmin && currentAdmin.id_societe
    ) {
      return currentAdmin.id_societe
    } else {
      this.route.navigate(['/login']);
    }
  }

  get(url: string): Observable<Object[]> {
    return this.http.get(environment.apiUrl + url)
      .pipe(map((res: any) => res.data.data), catchError(this.handleError));
  }
  getData(url) {

    return this.http.get(environment.apiUrl + url)
      .pipe(map((res: any) => { return res
        console.log(res)
       }, err => {

      }));
  }


  delete(url: string, id: string,) {
    return this.http.delete(environment.apiUrl + url + id)
      .pipe(map((res: any) => { return res }, err => {

      }));
  }

  post(url, entity) {


    return this.http.post(environment.apiUrl + url, entity).pipe(map((res: any) => {
      return res;
    }, err => {
      console.log(err);
    }));
  }
  postData(url, entity) {
    // 
    return this.http.post(environment.apiUrl + url, entity).pipe(map((res: any) => {
      return res;
    }, err => {

    }));
  }

  

  put(url, entity) {


    return this.http.put(environment.apiUrl + url, entity).pipe(map((res: any) => {
      return res;
    }, err => {


    }));
  }
  patch(url, id, entity) {
    // 

    return this.http.patch(environment.apiUrl + url + id, entity).pipe(map((res: any) => {
      return res;
    }, err => {


    }));
  }
  

  //
  // /**
  //  * @param res Response
  //  */
  // // extractData(res: Response) {
  // //     let body = res;
  // //     return body;
  // // }
  //
  // /**
  //  *
  //  * @param error Response or any
  //  */
  handleError(error: Response | any) {

    return Observable.throw(error.status);
  }


}
