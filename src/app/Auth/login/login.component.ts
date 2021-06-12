import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/Model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: String;
  color: String;
  description: String;
  password='password'
  constructor(private authServ: AuthService,
    private route: Router) { }

  ngOnInit() {
  }
  onLogin() {
    // const val = this.form.value;



    this.authServ.login(this.user).subscribe(data => {
      // console.log(data)
      if (data) {
        // window.location.assign("/")
        // this.route.navigateByUrl('/');
        // location.reload();

      }
    }, err => {

    });

  }
  afficherPAssword(){
    this.password='text'
  }
}
