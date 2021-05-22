import { environment } from './../../../../environments/environment.prod';
import { ApiService } from '../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [{
    'image': 'product-1.png'
  }, { 'image': 'product-2.png' }, { 'image': 'product-3.png' }, { 'image': 'product-4.png' }, {
    'image': 'product-5.png'
  }, { 'image': 'product-4.png' }, { 'image': 'product-7.png' }, { 'image': 'product-6.png' }
  ];
  categories: any = []
  bannieres: any = []
  apiUrl: string
  constructor(private apiSer: ApiService , private router:Router) {
    this.apiUrl = environment.apiImg + 'Banniere'
  }

  ngOnInit() {
    this.getCategorie()
    this.getBanniere()
    this.scrollToTop()
  }
  getCategorie() {
    this.apiSer.get('categories/').subscribe(data => {
      //
      this.categories = data
    }, err => {


    })
  }
  getBanniere() {
    this.apiSer.get('bannieres/?limit=1&sort=-createdAt').subscribe(data => {
      this.bannieres = data[0]
      //
    }, err => {


    })
  }
  scrollToTop(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}
