import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { SignupValidator } from './signupValidator';

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
  constructor(public router: Router, public http: Http, formbuilder: FormBuilder) {
    this.form = formbuilder.group({
                username: ['', Validators.compose([Validators.required,
                               SignupValidator.underscorecheck])],
                password: []
            })
  }

  // signup(event, email, password) {
  //   event.preventDefault();
  //   let body = JSON.stringify({ email, password });
  //   console.log('body', body);
  //   this.http.post('http://localhost:3000/api/v1/users', body, { headers: contentHeaders })
  //     .subscribe(
  //       response => {
  //         localStorage.setItem('accessToken', response.json().accessToken);
  //         this.router.navigate(['/home']);
  //          console.log("cool");
  //       },
  //       error => {
  //         alert(error.text());
  //         console.log(error.text());
  //         console.log("bad");
  //         console.log('contentHeaders', contentHeaders);
           
  //         //  console.log('headers: contentHeaders', headers: contentHeaders);
  //       }
  //     );
  // }
  
  getUsers() {
  this.http.get('http://localhost:3000/api/v1/users')
      .subscribe(
        response => {
           console.log("cool", response.json());
           this.router.navigate(['/home']);
        },
        error => {
          console.log("bad");
        }
      )
}

//  signup(event, email, password) {
//     event.preventDefault();
//     let body = JSON.stringify({ email, password });
//     console.log('body', body);
//     this.http.post('http://localhost:3000/api/v1/users', body)
//       .subscribe(
//         response => {
//           // localStorage.setItem('accessToken', response.json().accessToken);
//           this.router.navigate(['/home']);
//            console.log("cool");
//         },
//         error => {
//           alert(error.text());
//           console.log(error.text());
//           console.log("bad");
//           // console.log('contentHeaders', contentHeaders);
           
//           //  console.log('headers: contentHeaders', headers: contentHeaders);
//         }
//       );
//   }
  

signup(event, email, password) {
  event.preventDefault();
  // let body = JSON.stringify({ email, password });
  let user = {email, password};
  
  console.log('body', user);
  console.log('body', user.email);
  this.http.post('http://localhost:3000/api/v1/users', user)
      .subscribe(
        response => {
           console.log("coolll", response);
          //  console.log('accessToken', response.json().accessToken);
           this.router.navigate(['/home']);
        },
        error => {
          console.log("bad");
            console.log('body12', user.email);
        }
      )
}

  login(event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }

}
