import { Component } from '@angular/core';
import { LoginService } from '../../services/login_services/login.service';
import { Router } from '@angular/router';
import { Users } from '../../../Users';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  users: Users[];
  data = {
    uname: String,
    pswd: String,
    gender: String,
    mailId: String,
    city: String,
    address: [
      {
        apt_No: String,
        city: String,
        state: String,
        ziCode: String
      }

    ]
  };
  constructor(
    private router: Router,
    private loginService: LoginService) { }

  formSubmit(event) {
    event.preventDefault();
    var newCustomer = {
      name: this.data.uname,
      password: this.data.pswd,
      gender: this.data.gender,
      email: this.data.mailId,
      city: this.data.city,
      loginId: this.data.uname,
      address: [
        {
          apt_No: this.data.address[0].apt_No,
          state: this.data.address[0].city,
          city: this.data.address[0].state,
          ziCode: this.data.address[0].ziCode,
        }
      ]
    }

    this.loginService.addCustomer(newCustomer)
      .subscribe(data => {
        console.log('Customer', data);
        //this.data = data;
      },
      error => console.log(this.data),
      () => console.log('Get Item complete'));


  }
}