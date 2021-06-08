import { environment } from '../../../environments/environment';
import { ApiService } from '../../shared/services/api.service';
import { Component, OnInit,Input } from '@angular/core';
import { Catalogue } from '../../shared/Model/Catalogue';
import { ActivatedRoute,Router } from '@angular/router';
import { CatalogueService } from '../../shared/services/catalogues.service';

@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrls: ['./catalogues.component.css']
})
export class CataloguesComponent implements OnInit {
  enseignes: any = []
  categories: any = []
  catalogues: any = []
  catalogue: Catalogue = new Catalogue()
  apiUrl: any
  limit: number = 5
  user: string = ''
  slice1 = 0
  slice2 = 3
  sort: string
  enseigne: string
  added = ''
  empty=false
  ///* ngx pagination */
  totalRecords: string
  page: number = 1
  idcategories: number
  idenseignes: number
  categoriesName: string = ''
  @Input() src;
  constructor(private apiSer: ApiService, private active: ActivatedRoute,private router:Router,private catalogueService:CatalogueService) {
    this.apiUrl = environment.apiImg
    this.catalogue.categories = 'rr';

  }

  ngOnInit() {
    this.user = localStorage.getItem(environment.TOKEN)
        //
    this.active.params.subscribe(res => {
      console.log(res)
      if (res.idCategorie) {
        console.log(res.idCategorie)
        this.idcategories = res.idCategorie
        this.categoriesName = res.categoriesName
       // this.getCataloguesBycategories(this.idcategories)
        this.getCatalogueByName('categories',this.idcategories);
      } else if (res.idenseigne) {
        this.idenseignes = res.idenseigne
        this.categoriesName = res.enseignesName
        this.getCatalogueByName('enseigne',this.idenseignes);
       // this.getCataloguesByenseignes(res.idenseigne)

      } else {
        this.getCatalogues()
      }
    })
    this.getenseignes()
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
  public getCatalogues() {
    return new Promise(resolve => {
      //
      this.catalogues = []
      return this.apiSer.getData('catalogues/getPromotion').subscribe((res: any) => {
        this.catalogues = res.data.data
        this.totalRecords = res.data.data.length
         console.log(res.data.data,"resssssssssssssssssss cat;")
        resolve(this.catalogues)
      })
    })
  }
  public onChangeName(event) {
    return new Promise(resolve => {


      this.catalogues = []

      if (!event.target.value) {
        this.catalogues = []
        this.getCatalogues()
      } else {

        this.getCatalogueByName(event.target.id,event.target.value);

      }
    })
    

  }
  getCatalogueByName(id,value){
    this.empty=false
    this.catalogueService.getCatalogueByName(id,value).then(data=>{

      this.catalogues = data;
      this.catalogues.length ==0 ? this.empty=true : null
    })
  }
  

  public getCataloguesByPage(page) {
    return new Promise(resolve => {

      this.catalogues = [];
      return this.apiSer.getData('catalogues/getPromotion?sort=-createdAt&page=' + page + '&limit=' + this.limit).subscribe((res: any) => {
        this.catalogues = res.data.data;

        resolve(this.catalogues);
      })
    });
  }
  public getCatalogueByEnseigne() {
    return new Promise(resolve => {

      this.catalogues = [];
      return this.apiSer.getData('catalogues/getPromotion?sort=-createdAt&enseigne=' + this.enseigne).subscribe((res: any) => {
        this.catalogues = res.data.data;

        resolve(this.catalogues);
      })
    });
  }


  // ajouter catalogue au favoris
  addFavoris(event) {
    console.log('testttttttttttttt')
    console.log(event,"dddddddddddddddddddddddddddd")
   
    // let body = {
    //   catalogues: catalogue
    // }
    // this.apiSer.postData('favoris/', body).subscribe((res: any) => {
    //   // this.added='added'

    //   location.reload();
    // }, err => {}
    // );
  }
}
