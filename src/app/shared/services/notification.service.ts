import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url=`${environment.apiUrl}notifications/`
  constructor(private http:HttpClient) { }
  getAllNotifications(): Observable<any> {
    return this.http
    .get<any>(`${this.url}`)
    .pipe(map(response => response.data ) );
  }
}
