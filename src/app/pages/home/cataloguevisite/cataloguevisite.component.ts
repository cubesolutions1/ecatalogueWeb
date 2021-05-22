import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-cataloguevisite',
  templateUrl: './cataloguevisite.component.html',
  styleUrls: ['./cataloguevisite.component.css']
})
export class CataloguevisiteComponent implements OnInit {
  categories:any = [];
  categories0:any = [];
  categories1:any = [];
  categories2:any = [];
  categories3:any = [];
  catalogues:any = [];
  enseignes:any = [];
  apiUrl:string;
  limit=6;
  constructor(private apiSer:ApiService) {
    this.apiUrl=environment.apiImg + 'Catalogues'
  }

  ngOnInit() {
    this.getcategories();
    this.getcatalogues();
    this.getenseignes();
  }
  public getcategories() {
    return new Promise(resolve => {

      //
      this.categories = [];
      return this.apiSer.getData('categories/?limit='+this.limit+'&sort=-createdAt').subscribe((res: any) => {
        this.categories = res.data.data;
        // this.categories1 = res.data.data[1]
        // this.categories2 = res.data.data[2]
        // this.categories3 = res.data.data[3]

        //
        resolve(this.categories)
        // resolve(this.categories1)
        // resolve(this.categories2)
        // resolve(this.categories3)
      })
    })
  }
  public getcatalogues() {
    return new Promise(resolve => {

      //
      this.catalogues = [];
      return this.apiSer.getData('catalogues/getPromotion?limit='+this.limit+'&sort=-dateDebut').subscribe((res: any) => {
        this.catalogues = res.data.data;
        // this.catalogues1 = res.data.data[1]
        // this.catalogues2 = res.data.data[2]
        // this.catalogues3 = res.data.data[3]

        //
        resolve(this.catalogues)
        // resolve(this.catalogues1)
        // resolve(this.catalogues2)
        // resolve(this.catalogues3)
      })
    })
  }
  public getenseignes() {
    return new Promise(resolve => {

      //
      this.enseignes = [];
      return this.apiSer.getData('enseignes/?limit='+this.limit+'&sort=-dateDebut').subscribe((res: any) => {
        this.enseignes = res.data.data;

        //
        resolve(this.enseignes)

      })
    })
  }
 public backgroundimage(img){
    return this.apiUrl=environment.apiImg + 'Categories/'+img;
  }
}
