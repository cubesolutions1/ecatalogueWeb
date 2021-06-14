import { ApiService } from '../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { JSONPConnection } from '@angular/http';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favoris: any = []
  catalogues: any = []
  apiUrl: string
  user: any
  length: number
  constructor(private apiSer: ApiService) {
    this.apiUrl = environment.apiImg + 'Catalogues'
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(environment.currentAdmin))
    // console.log('this.user',this.user.role);

    if (this.user) {
      //
      this.getfavoris()

    }
  }
  // allFavoris
  public getfavoris() {
    return new Promise(resolve => {

      //
      this.favoris = [];
      return this.apiSer.getData('favoris/getFavorisByMe').subscribe((res: any) => {
        //

        this.favoris=res.data.data

        // for (let item of res.data.data) {
        //   if (item.catalogues != null) {
        //     this.favoris.push(item)
        //   }
        // }
        //
        this.length=this.favoris.length
        resolve(this.favoris);
      })

    });
  }
  public deletefavoris(id) {
    return new Promise(resolve => {
      //
      return this.apiSer.delete('favoris/', id).subscribe((res: any) => {

        this.getfavoris()


        resolve(this.favoris);
      })
    });
  }
}
