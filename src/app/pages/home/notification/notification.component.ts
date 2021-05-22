import { environment } from './../../../../environments/environment';
import { ApiService } from '../../../shared/services/api.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {
  notification: any = []
  catalogues: any = []
  totalnotification: number;
  apiUrl: string
  user: string = ''
  constructor(private apiSer: ApiService) {
    this.apiUrl = environment.apiImg + 'Catalogues'
    this.user = localStorage.getItem(environment.TOKEN)
    //


  }

  ngOnInit() {
    if (this.user) {
      //
      this.getnotification()
    }
  }
  // allnotification
  public getnotification() {



     this.apiSer.getData('notifications').subscribe((res: any) => {
        this.notification = res.data.data;
        this.totalnotification = res.data.data.length


    });
  }
  public deletenotification(id) {
    return new Promise(resolve => {
      //
      return this.apiSer.delete('notification/', id).subscribe((res: any) => {

        this.getnotification()


        resolve(this.notification);
      })
    });
  }
  updatestatus(id){
    this.apiSer.patch('notifications/lue',id,null).subscribe();
  }
}
