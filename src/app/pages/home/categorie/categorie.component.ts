import { ApiService } from '../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: any = []
  i = 4
  constructor(private apiSer: ApiService) { }

  ngOnInit() {
    this.getCategorie()
  }
  getCategorie() {
    this.apiSer.get('categories/').subscribe(data => {
      //
      this.categories = data;
    }, err => {


    });
  }
  afficherplus() {
    this.apiSer.get('categories/').subscribe(data => {
      this.i = data.length;

    }, err => {


    });
  }
  afficherMoins() {
    this.apiSer.get('categories/').subscribe(data => {
      this.i = 4;

    }, err => {


    });
  }
}
