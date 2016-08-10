import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';

import { AuthFactory } from '../services/authFactory';
import { contentHeaders } from '../common/headers';

import {Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

const styles   = require('./signup.css');
const template = require('./signup.html');

@Component({
  selector: 'signup',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Signup {
  form: ControlGroup;
  
  constructor(public router: Router, public http: Http) {}
  

  signup(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    console.log('body', body);
    this.http.post('http://localhost:3000/api/v1/users', body, { headers: contentHeaders })
    // AuthFactory.save(body)
      .subscribe(
        response => {
          if (response.json().status.success == null) {
            alert('email address or password you entered is not correct');
          } else {
            this.router.navigate(['/login']);
            alert('you register');
          }
        },
        error => {
          alert(error.text());
          console.log(error.text());
          console.log("bad");
          console.log('contentHeaders', contentHeaders);
        }
      );
  }
  
  login(event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }

}
