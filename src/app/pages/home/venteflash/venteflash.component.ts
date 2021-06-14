import { CatalogueService } from '../../../shared/services/dashboard.service';
import { ApiService } from '../../../shared/services/api.service';
import { environment } from './../../../../environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-venteflash',
  templateUrl: './venteflash.component.html',
  styleUrls: ['./venteflash.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class VenteflashComponent implements OnInit {


  produits: any
  page: number = 1
  apiUrl: string
  config: any
  datenow: any;
  empty = false;
  constructor(private apiSer: ApiService,
    private catalogueService: CatalogueService,
    private router: Router,
    private cdRef: ChangeDetectorRef) {
    this.apiUrl = environment.apiImg + 'Produit'
    this.datenow = moment();

  }
  customOptions: OwlOptions = {
    loop: false,
    autoplay: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    // margin: 1,
    navText: ["  <i class='icon-angle-left text-50'></i>"
      , "<i class='icon-angle-right text-50'></i>   "],

    navSpeed: 600,
    // navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 6
      }
    },
    nav: true
  }
  ngOnInit() {
    this.getProducts();
    //
  }
  public getProducts() {

    return new Promise(resolve => {
      return this.apiSer.getData('produits/venteflash').subscribe((res:any) => {
        // return this.apiSer.getData('produits/').subscribe(res => {
        //
        this.produits = res.data.data
        res.data.data.length == 0 ? this.empty = true : null
        // {leftTime: 20}

        resolve(res)

      }, err => {
        this.empty = true
      }
      )
    })
  }
  // Calculate the difference date fin vente flash-datenow

  public getDifference(d2) {

    var dateB = moment(d2);
    var duration = moment.duration(dateB.diff(this.datenow))
    var date = duration.asSeconds()
    return date

  }
  viewEvent(id, item) {
    // console.log(item)

    let body = {
      viewsNb: 1,
      appType: 'web',
      commercant: item
    }
    this.apiSer.post(`produits/${id}/views`, body).subscribe(s => { }
      // console.log(s)
      , err => {
      // console.log(err)
      });


    // this.counttab[index] = this.count
    // }
    //


  }

  // Gotodetails(data){
  //   this.catalogueService.setventeflash(data)
  //   this.router.navigate(['/detailproduit/' +data.id])
  // }

}

