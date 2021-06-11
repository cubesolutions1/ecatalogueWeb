import { AuthService } from './../../shared/services/auth.service';
import { UserService } from './../../shared/services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { User } from '../../shared/Model/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastContainerDirective,ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-loginBllock',
  templateUrl: './loginBllock.component.html',
  styleUrls: ['./loginBllock.component.css']
})
export class LoginBllockComponent implements OnInit {
  // @ViewChild(ToastContainerDirective, { static: true })
  // toastContainer: ToastContainerDirective;
  
  user: User = new User();
  errors: string = ''
  errorList = [];
  color: string = ''
  description: string = ''
  public type: string = 'signin-tab'
  public login : Boolean = true;
  public register :Boolean = false
  public showlogin :Boolean = true
  public showRegister :Boolean = false
  constructor(private authServ: AuthService,
    private userSer: UserService,
    private route: Router,) {
  }

  ngOnInit() {
   // this.toastr.overlayContainer = this.toastContainer;
  }

  onLogin() {
    // const val = this.form.value;


    //
    this.authServ.login(this.user).subscribe(data => {
      console.log('data', data)
      if (data) {
        this.userSer.getMe().subscribe(res => {
          console.log(res.role !== 'client');
          if (res.role !== 'client') {
            Swal.fire(
              'Erreur',
              'Vouns n\'avez pas le droit d\'accés',
              'warning'
            )
          } else {
            Swal.fire(
              'Bienvenue',
              res.name,
              'success'
            ).then((result) => {

              location.reload();
            })
          }
        })
        // this.route.navigateByUrl('/');
      }
    }, err => {
      this.errors = err.error.message
    });

  }

  onRegister() {

    this.user.role = 'client'

   // this.getALert(null, null, null)
    this.userSer.signUp(this.user).subscribe(data => {
     console.log(data,"dddddddddddddddddddddddddddddddddddd")
      if (data) {
        console.log(data)
       
       this.getALert("vous pouvez naviguer vers connexion ", 'success',"success");
      
         //this.route.navigate(['/']);
      //  location.reload();

      }

    }, err => {
      // tslint:disable-next-line: no-console
      
      if (err.error.message.split('Error')) this.errorList = err.error.message.split('Error');
      this.getALert('Error:', 'danger', this.errorList)
      //      this.getALert(err.error.status, 'danger', err.error.message)
    });
  }

  getALert(error, color, description) {
    this.errors = error;
    this.color = color
    this.description = description
  }
}
