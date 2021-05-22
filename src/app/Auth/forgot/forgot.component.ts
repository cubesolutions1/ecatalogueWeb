import { ApiService } from '../../shared/services/api.service';
import { User } from '../../shared/Model/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  user: User = new User();
  forgotpass = true;
  resetPass = false;
  codetoken: number;
  error: String = ''
  color: String = ''
  description: String = ''
  constructor(private apiSer: ApiService,
    private active: ActivatedRoute,
    private route: Router) {
    this.active.params.subscribe(res => {
      //
      if (res.codetoken) {

        this.resetPass = true;
        this.forgotpass = false;
        this.codetoken = res.codetoken
      } else {
        this.resetPass = false;
        this.forgotpass = true;
        // this.codetoken = res.codetoken

      }
    })
  }

  ngOnInit() {


  }

  onForgotPassword() {
    //
    this.getALert(0, 0, 0)
    this.apiSer.post('users/forgotPassword', this.user).subscribe(res => {

      this.forgotpass = false;
      this.resetPass = true;

    }, err => {
console.log(err);

      this.getALert(err.error.status, 'danger', err.error.message);
    });
  }

  onResetPassword() {
    let body = {
      password: this.user.password,
      passwordConfirm: this.user.passwordConfirm
    }
    //

    this.apiSer.patch('users/resetPassword/', this.codetoken, body).subscribe(res => {
      //
      this.route.navigateByUrl('/')
    }, err => {

      this.getALert(err.error.status, 'danger', err.error.message);
    });
  }

  getALert(error, color, description) {
    this.error = error;
    this.color = color;
    this.description = description;
  }

}
