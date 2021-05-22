import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogueBlock',
  templateUrl: './catalogueBlock.component.html',
  styleUrls: ['./catalogueBlock.component.css']
})
export class CatalogueBlockComponent implements OnInit {
  idCategorie: number;
  catalogues: any = [];
  catalogue: any;
  _id = 0;
  constructor(private active: ActivatedRoute,
    private apiSer: ApiService) {


  }

  ngOnInit() {
    this.getCatalogue();
  }
  getCatalogue() {
    this.apiSer.get('catalogues/').subscribe(data => {
      this.catalogues = data;


    });
  }
  getCataloguedetail(event) {

    this.apiSer.get('catalogues/' + event).subscribe(data => {
      this.catalogue = data;


    });
  }
  clickEventHandler(event) {



  }

}
