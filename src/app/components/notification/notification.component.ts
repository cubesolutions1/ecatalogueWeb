import { Notification } from './../../shared/Model/notification';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { NotificationService } from '../../shared/services/notification.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: any = []
  notification$: Observable<Notification[]>;
  catalogues: any = []
  apiUrl: string
  user: string = ''
  constructor(private notifSer: NotificationService) {
    this.apiUrl = environment.apiImg + 'Catalogues'
    this.user = localStorage.getItem(environment.TOKEN)
    // console.log(this.user !== '');


  }

  ngOnInit() {
    if (this.user) {
      // console.log('true');
      this.getnotification()
    }
  }
  // allnotification
  public getnotification() {
    return new Promise(resolve => {
      // console.log('this.idSociete');
      this.notification = [];
      this.notification=  this.notifSer.getAllNotifications()
console.log(this.notification);

    });
  }
}
