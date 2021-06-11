import { ApiService } from '../../shared/services/api.service';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Produit } from '../../shared/Model/Produit';
import * as moment from 'moment';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  enseignes: any = []
  categories: any = []
  produits: any = []
  produit: Produit = new Produit()
  apiUrl: any
  limit: number = 5
  user: string = ''
  slice1 = 0
  slice2 = 3
  sort: string
  enseigne: string
  added = ''
  empty = false
  show = false
  datenow: any;
  @Input() src;
  ///* ngx pagination */
  totalRecords: string
  page: number = 1
  constructor(private apiSer: ApiService, private active: ActivatedRoute, private imageRef: ElementRef) {
    this.apiUrl = environment.apiImg + 'Produit'
    this.produit.categories = 'rr';
    this.active.params.subscribe(res => {

      this.datenow = moment()

    })
  }
 
  ngOnInit() {
    this.user = localStorage.getItem(environment.TOKEN)
    //

    this.getenseignes()
    this.getproduits()
    this.getcategories()
  }

  public getenseignes() {
    return new Promise(resolve => {

      //
      this.enseignes = []
      return this.apiSer.getData('enseignes/').subscribe((res: any) => {
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
      return this.apiSer.getData('categories/').subscribe((res: any) => {
        this.categories = res.data.data
        //


        resolve(this.categories)

      })
    })
  }
  public getproduits() {
    return new Promise(resolve => {
      this.produits = []
      return this.apiSer.getData('produits/venteflash?sort=-createdAt').subscribe((res: any) => {

        this.produits = res.data.data
        this.totalRecords = res.data.data.length

        resolve(this.produits)
      })
    })
  }
  public onChangeName(event) {
    return new Promise(resolve => {
      this.empty = false

      this.produits = []

      if (!event.target.value) {
        this.produits = []
        this.getproduits()
      } else {
        return this.apiSer.getData('produits/venteflash?' + event.target.id + '=' + event.target.value + '&sort=-createdAt').subscribe((res: any) => {
          this.produits = res.data.data

          if (this.produits.length == 0) this.empty = true
          resolve(this.produits)
        }, err => {}
        )
      }
    })
  }

  public getproduitsByPage(page) {
    return new Promise(resolve => {

      this.produits = [];
      return this.apiSer.getData('produits/venteflash?sort=-createdAt&page=' + page + '&limit=' + this.limit).subscribe((res: any) => {
        this.produits = res.data.data;

        resolve(this.produits);
      })
    });
  }
  public getproduitByEnseigne() {
    return new Promise(resolve => {

      this.produits = [];
      return this.apiSer.getData('produits/venteflash?sort=-createdAt&enseigne=' + this.enseigne).subscribe((res: any) => {
        this.produits = res.data.data;

        resolve(this.produits);
      })
    });
  }


  // ajouter produit au favoris
  addFavoris(produit) {


    let body = {
      produits: produit
    }
    this.apiSer.postData('favoris/', body).subscribe((res: any) => {
      // this.added='added'

      location.reload();
    }, err => {}
    );
  }

  // Calculate the difference date fin vente flash-datenow

  public getDifference(d2) {

    var dateB = moment(d2);
    var duration = moment.duration(dateB.diff(this.datenow))
    var date = duration.asSeconds()
    return date

  }
}
