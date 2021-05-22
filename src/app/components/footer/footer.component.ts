import { ApiService } from '../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  catalogues: any = []
  categories: any = []
  products: any = []
  enseignes: any = []
  limit = 16
  dateNow = new Date()
  constructor(
    private apiSer: ApiService
  ) { }
  ngOnInit() {
    this.getcatalogues()
    this.getcategories()
    this.getproducts()
    this.getenseignes()
  }
  public getcatalogues() {
    return new Promise(resolve => {

      //
      this.catalogues = []
      return this.apiSer.getData('catalogues/?limit=' + this.limit + '&sort=-clics').subscribe((res: any) => {
        this.catalogues = res.data.data

        //
        resolve(this.catalogues)

      })
    })
  }
  public getenseignes() {
    return new Promise(resolve => {

      //
      this.enseignes = []
      return this.apiSer.getData('enseignes/?limit=' + this.limit + '&sort=-clics').subscribe((res: any) => {
        this.enseignes = res.data.data

        //
        resolve(this.enseignes)

      })
    })
  }
  public getcategories() {
    return new Promise(resolve => {

      //
      this.categories = []
      return this.apiSer.getData('categories/?limit=' + this.limit + '&sort=-createdAt').subscribe((res: any) => {
        this.categories = res.data.data

        //
        resolve(this.categories)

      })
    })
  }
  public getproducts() {
    return new Promise(resolve => {

      //
      this.products = []
      return this.apiSer.getData('produits/?limit=' + this.limit + '&sort=-createdAt').subscribe((res: any) => {
        this.products = res.data.data

        //
        resolve(this.products)

      })
    })
  }
}
