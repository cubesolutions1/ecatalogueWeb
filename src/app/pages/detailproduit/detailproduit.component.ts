import { environment } from '../../../environments/environment';
import { ApiService } from '../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CatalogueService } from '../../shared/services/catalogues.service';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  idproduit: number
  user: string=''
  apiUrl: string
  produit: any
  loading: boolean = true;
  constructor(private active: ActivatedRoute,
    private apiSer: ApiService,
    private catalogueService:CatalogueService,
    private router:Router) {
      this.apiUrl = environment.apiImg
      this.active.params.subscribe(res => {
        this.idproduit = res.idproduit
      }
      )
    }
   async ngOnInit() {
    //  console.log( this.catalogueService.getventeflash())
    // this.produit = this.catalogueService.getventeflash()
    this.scrollToTop();
    this.user=localStorage.getItem(environment.currentAdmin)


    this.getproduitById()
  }
  public getproduitById() {
    return new Promise(resolve => {

      return this.apiSer.getData('produits/' + this.idproduit).subscribe((res: any) => {
        // this.added='added'
        // console.log(res)

        this.produit = res.data.data

        resolve(this.produit)
        // location.reload();
      }, err => {}
      );
    });
  }

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
  onLoad() {
    this.loading = false;
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
