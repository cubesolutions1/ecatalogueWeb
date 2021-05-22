import { NotificationService } from '../../shared/services/notification.service';
import {environment} from '../../../environments/environment';
import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {AuthService} from "../../shared/services/auth.service";
import {ApiService} from "../../shared/services/api.service";
import {CatalogueService} from "../../shared/services/catalogues.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items = [
    {
      name: 'Accueil', url: '/', active: 'active'
    },
    {name: 'Promotions', url: '/catalogues', active: ''},
    {name: 'Vente flash', url: '/venteflash', active: ''},
    {name: 'Contact', url: '/contact', active: ''}
  ];
  searchForm: FormGroup;
  selectedPath = '';
  user: any;
  categories: any = [];
  bannieres: any = [];
  favoris: any = [];
  length: number;
  apiUrl: string;
  show: string;
  loading: boolean = true;
  catalogues: Observable<any>;

  searchItem: FormControl = new FormControl('');


  constructor(private authSer: AuthService,
              private route: Router,
              private notifSer:NotificationService,
              private apiSer: ApiService,
              private catalogueService: CatalogueService) {
    this.user = this.authSer.isLoggedIn();
    this.apiUrl = environment.apiImg
    this.route.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url
    });
    //
  }


  async ngOnInit() {
    this.getCategories();
    if (this.user) this.getfavoris();
    this.getBanniere();
    this.shows();
    // await this.getfavoris();
    this.getNotification()
  }

  public getfavoris() {
    return new Promise(resolve => {

      //
      this.favoris = [];
      return this.apiSer.getData('favoris/getFavorisByMe').subscribe((res: any) => {
        this.favoris = res.data.data
        // for (let item of res.data.data) {
        //   if (item.catalogues != null) {

        //     this.favoris.push(item)
        //   }
        // }
        //

        resolve(this.favoris);
      })

    });
  }

  shows() {
    if (this.route.url === '/') {
      this.show = 'show'
    } else {
      this.show = ''
    }
  }

  // logout() {
  //

  //   this.authSer.logout();
  //   // this.route.navigateByUrl('/login');
  // }
  // public getfavoris() {
  //   return new Promise(resolve => {

  //     return this.apiSer.getData('favoris/allFavoris').subscribe((res: any) => {
  //
  //       this.length = res.results
  //       resolve(this.length);
  //     })
  //   });
  // }
  getCategories() {
    this.apiSer.get('categories/?sort=ordre').subscribe(data => {
      //
      this.categories = data;
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

  getCatalogues(value) {
    this.catalogues = this.catalogueService.getFiltredCatalogues(value);
  }


  searchKeyUp(event) {
    const val = event.target.value.toLowerCase().trim();
    this.getCatalogues(val)

  }

  //  For confirm action On Delete
  logout() {

    Swal.fire({
      title: 'êtes vous Sûre?',
      text: "Voulez-vous vraiment vous déconnecter!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#07ca6f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmer'
    }).then((result) => {

      result.isConfirmed ? this.authSer.logout() : null

    })
  }

  onLoad() {
    this.loading = false;
  }

  getNotification() {
    this.notifSer.getAllNotifications()
  }

}
