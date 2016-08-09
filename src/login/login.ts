import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

import { contentHeaders } from '../common/headers';
import { AuthFactory } from '../services/authFactory';

import {Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

const styles   = require('./login.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, public http: Http) {}

  // login(event, username, password) {
  //   event.preventDefault();
  //   let body = JSON.stringify({ username, password });
  //   this.http.post('http://localhost:3000/api/v1/loginByEmail', body, { headers: contentHeaders })
  //     .subscribe(
  //       response => {
  //         localStorage.setItem('accessToken', response.json().id_token);
  //         this.router.navigate(['/home']);
  //       },
  //       error => {
  //         alert(error.text());
  //         console.log(error.text());
  //       }
  //     );
  // }
  
  login(event, email, password) {
    
    event.preventDefault();
    
    let body = JSON.stringify({ email, password });
    console.log(body);
    
    this.http.post('http://localhost:3000/api/v1/auth/loginByEmail', body, { headers: contentHeaders })
    // AuthFactory.login(body)
      
      .subscribe(
        response => {
          console.log(response.json());
          localStorage.setItem('accessToken', response.json().user.accessToken);
          this.router.navigate(['/home']);
          console.log('$localStorage', localStorage.accessToken);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
    
    // this.authFactory.login(body).subscribe((result) => {
    //   if (result) {
    //     console.log('result', result);
    //     this.router.navigate(['Home']);
    //   }
    // });
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['/signup']);
  }
}
