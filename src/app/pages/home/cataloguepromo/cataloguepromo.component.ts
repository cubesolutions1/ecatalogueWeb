import {environment} from '../../../../environments/environment';
import {Component, OnInit} from '@angular/core';
import {Catalogue} from '../../../shared/Model/Catalogue';
import {ApiService} from '../../../shared/services/api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-cataloguepromo',
  templateUrl: './cataloguepromo.component.html',
  styleUrls: ['./cataloguepromo.component.css']
})
export class CataloguepromoComponent implements OnInit {
  enseignes: any = []
  categories: any = []
  catalogues: any = []
  catalogue: Catalogue = new Catalogue()
  apiUrl: any
  apiPDF: any
  limit: number = 5
  user: string = ''
  slice1 = 0
  slice2 = 3
  sort: string
  enseigne: string
  added = ''
  counttab = []
  count: number = 0
  ///* ngx pagination */
  totalRecords: string
  page: number = 1
  empty = false

  constructor(private apiSer: ApiService) {
    this.apiUrl = environment.apiImg
    this.catalogue.categories = 'rr';

  }

  ngOnInit() {
    this.user = localStorage.getItem(environment.TOKEN)
    //
    this.getenseignes()
    this.getCatalogues()
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
        resolve(this.categories)

      })
    })
  }

  public getCatalogues() {
    return new Promise(resolve => {
      //
      this.catalogues = []
      return this.apiSer.getData('catalogues/getPromotion?sort=-createdAt').subscribe((res: any) => {
        this.catalogues = res.data.data
        this.totalRecords = res.data.data.length
        //
        resolve(this.catalogues)
      })
    })
  }

  public onChangeName(event) {
    return new Promise(resolve => {
      this.empty = false
      //
      this.catalogues = []
      // ?categories=5fb52bbd5f672c3580b340ad&limit=12
      // ?enseigne=5fca59bd5a751a03e86e2445&sort=-createdAt
      //
      if (!event.target.value) {
        this.catalogues = [];
        this.getCatalogues()
      } else {

        return this.apiSer.getData('catalogues/getPromotion?' + event.target.id + '=' + event.target.value + '&sort=-createdAt').subscribe((res: any) => {
            this.catalogues = res.data.data;
            res.data.data.length === 0 ? this.empty = true : null

            resolve(this.catalogues)
          }, err => {
            console.log(err)
          }
          //
        )
      }
    })
  }

  public getCataloguesByPage(page) {
    return new Promise(resolve => {
      //
      this.catalogues = [];
      return this.apiSer.getData('catalogues/getPromotion?sort=-createdAt&page=' + page + '&limit=' + this.limit).subscribe((res: any) => {
        this.catalogues = res.data.data;
        //
        resolve(this.catalogues);
      })
    });
  }

  public getCatalogueByEnseigne() {
    return new Promise(resolve => {
      //
      this.catalogues = [];
      return this.apiSer.getData('catalogues/getPromotion?sort=-createdAt&enseigne=' + this.enseigne).subscribe((res: any) => {
        this.catalogues = res.data.data;
        //
        resolve(this.catalogues);
      })
    });
  }


  // ajouter catalogue au favoris
  addFavoris(catalogue) {

    //
    const body = {
      catalogues: catalogue
    }
    this.apiSer.postData('favoris/', body).subscribe((res: any) => {
        // this.added='added'

        location.reload();
      }, err => {
      }
    );
  }

  clickevent(id, index) {
    //

    // let idrepeat = id
    this.count = 1;
    const body = {
      clics: this.count
    };
    this.apiSer.patch('catalogues/AddClic/', id, body).subscribe((res: any) => {
        // this.added='added'
        //
        // location.reload();
      }, err => {
      }
      //
    );
    this.counttab[index] = this.count
    // }
    //
  }

  viewEvent(id, catalogued, commercant) {
    // let idrepeat = id
    this.count = 1
    let body = {
      viewsNb: 1,
      appType: 'web',
      commercant: commercant
    };
    this.apiSer.post(`catalogues/${id}/views`, body).subscribe()
    // this.counttab[index] = this.count
    // }
    //
  }

  public getPDF(value) {
    return this.apiPDF + value
  }

  /*
  * Show Alert if pdf not exist
  */
  showAlertPdf() {
    Swal.fire('Catalogue non disponible !')
  }
}




