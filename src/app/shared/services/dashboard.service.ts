import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

    url=`${environment.apiUrl}catalogues/`
    data : BehaviorSubject<any>

  constructor(private apiSer: ApiService,private http: HttpClient) {

    this.data = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('data')));
  }
  getFiltredCatalogues(item): Observable<any> {
    return this.http
    .get<any>(`${this.url}?etat=now&name=${item}`)
    .pipe(map(response => response.data ) );
  }
  /**
   * Get Catalogues By Categorie
   * @returns   {Promise<any>}
   * @param id(ensigne or categories)
   * @param value
   */
  getCatalogueByName(id,value){
    return new Promise(resolve => {
       this.apiSer.getData('catalogues/getPromotion?' + id + '=' + value + '&sort=-createdAt').subscribe((res: any) => {
          resolve(res.data.data)
        }, err => {}
        )
      }
    )
  }

  public getproduitById(id) {
    return new Promise(resolve => {

      return this.apiSer.getData('produits/' + id).subscribe((res: any) => {
        // this.added='added'
        // console.log(res)

        resolve(res.data.data)
        // location.reload();
      }, err => {}
      );
    });
  }

  getventeflash(){
    return this.data.value
  }
  setventeflash(data){
    localStorage.setItem('data', JSON.stringify(data));
     this.data.next(data)
  }

}


