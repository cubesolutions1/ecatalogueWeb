import { ApiService } from '../../shared/services/api.service';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/Model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  error: String;
  color: String;
  description: String;
  constructor(
    private authServ: AuthService,
    private apiSer: ApiService,
    private route: Router
  ) { }

  ngOnInit() {
  }
  onLogin() {
    // const val = this.form.value;



    this.authServ.login(this.user).subscribe(data => {
      //
      if (data) {
        //     localStorage.setItem('currentAdmin', JSON.stringify(data));
        //     localStorage.setItem('rememberMe', this.rememberMe);
        //     /*  location.reload();          //this.route.navigateByUrl('/dashboard');
        //       this.Location.go('/dashboard');*/
        this.getALert('success', 'success', 'Bienvenue mr! ');
        //
        this.route.navigateByUrl('/');
      }

    }, err => {

      this.getALert(err.error.status, 'danger', err.error.error.message);
    });
  }
  onRegister() {
    this.apiSer.post('users/signup', this.user).subscribe(data => {
      //
      if (data) {
        //     localStorage.setItem('currentAdmin', JSON.stringify(data));
        //     localStorage.setItem('rememberMe', this.rememberMe);
        //     /*  location.reload();          //this.route.navigateByUrl('/dashboard');
        //       this.Location.go('/dashboard');*/
        this.getALert('success', 'success', 'Bienvenue mr ' + this.user.name)
        //
        this.route.navigate(['/']);
      }

    }, err => {

      this.getALert(err.error.status, 'danger', err.error.message)
    });
  }
  getALert(error, color, description) {
    this.error = error;
    this.color = color
    this.description = description
  }
}
