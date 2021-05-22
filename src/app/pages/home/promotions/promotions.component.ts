import { BanniereService } from './../../../shared/services/banniere.service';
import { ApiService } from '../../../shared/services/api.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  categories: any = []
  bannieres: any = []
  banniere1: any = []
  banniere2: any = []
  apiUrl: string
  constructor(private apiSer: ApiService,
    private bannService:BanniereService) {
    this.apiUrl = environment.apiImg + 'Banniere/'
  }
  ngOnInit() {
    this.getBanniere()
  }
  getBanniere() {
    return new Promise(resolve => {
      this.bannService.getAllBannieres().subscribe((data: any) => {
        this.banniere1 = data.filter(dataa => dataa.position === 'banniere1'  )
        this.banniere2 = data.filter(dataa =>  dataa.position === 'banniere2' )
        console.log(this.banniere1);
        resolve(this.banniere1)
        resolve(this.banniere2)
      })
    })
  }

  viewEvent(id) {

    let body = {
      clicsNb: 1,
      appType: 'web'
    }
    this.apiSer.post(`bannieres/${id}/clics`, body).subscribe()


    // this.counttab[index] = this.count
    // }
    //


  }

}
