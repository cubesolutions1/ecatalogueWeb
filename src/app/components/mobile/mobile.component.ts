import { ApiService } from '../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
categories:any=[]
  constructor(private apiSer:ApiService) { }

  ngOnInit() {
    this.getCategorie()
  }
  getCategorie() {
    this.apiSer.get('categories/').subscribe(data => {
      //
      this.categories = data
    }, err => {


    })
  }
}
