import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as moment from 'moment';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {


  constructor(private http: HttpClient,
              private helper: JwtHelperService,
              private route: Router) {
  }

  login(user) {
    return this.http.post(environment.apiUrl + 'users/login', user).pipe(map((res: any) => {
      console.log('data', res)
      this.setSession(res);
      this.addUser(res.id);
      return res;
    }, err => {

      console.log(err)
    }));
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiredIn, 'second');
    localStorage.setItem(environment.TOKEN, authResult.token);
    const expirationDate = this.helper.getTokenExpirationDate(authResult.token);
    localStorage.setItem(environment.expires_at, JSON.stringify(expirationDate.valueOf()));
  }

  logout() {
    location.reload();
    localStorage.clear();
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(environment.expires_at);
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  addUser(id) {
    return this.http.get(environment.apiUrl + 'users/me', this.jwt()).subscribe((res: any) => {

      localStorage.setItem(environment.currentAdmin, JSON.stringify(res.data.data))
    })
  }

  public getUser() {
    return localStorage.getItem(environment.currentAdmin)
  }


  private jwt() {
    let currentUser = localStorage.getItem(environment.TOKEN);
    if (currentUser) {
      let headers = new HttpHeaders({'Authorization': 'Bearer ' + currentUser});
      return ({headers: headers});
    }
  }
}
