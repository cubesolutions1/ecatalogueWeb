import { environment } from './../../../../environments/environment';
import { ApiService } from '../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-confiance',
  templateUrl: './enseigne.component.html',
  styleUrls: ['./enseigne.component.scss']
})
export class EnseigneComponent implements OnInit {
  produits:any=[]
  enseignes:any=[]
  apiUrl:string
  constructor(private apiSer:ApiService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    // autoWidth:true,
    autoplay:true,
    navSpeed: 100,
    navText: ['&#8249', '&#8250;'],
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
        items: 4
      }
    },
    nav: true
  }
  ngOnInit() {
    this.getProducts()
    this.getEnseignes()
  }
  public getProducts() {
    return new Promise(resolve => {
      return this.apiSer.getData('produits/').subscribe(res => {
        //
        this.produits = res.data.data
        resolve(res)
      }, err => {}
      )
    })
  }
  public getEnseignes() {
    return new Promise(resolve => {
      return this.apiSer.getData('enseignes/?activeUrl=true').subscribe(res => {
        //
        this.apiUrl = environment.apiImg
        this.enseignes = res.data.data
        resolve(res)
      }, err => {}
      )
    })
  }
}
