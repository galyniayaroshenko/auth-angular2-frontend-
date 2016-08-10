import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { AuthFactory } from '../services/authFactory';

const styles = require('./home.css');
const template = require('./home.html');

@Component({
  selector: 'home',
  directives: [ CORE_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})

export class Home {

  constructor(public router: Router, public http: Http) {
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/startPage']);
  }
  
  auth: any;
  
   getUsersService() {
    this.auth = [];
  
    AuthFactory.getAll().then((data) => {
      this.auth = data;
      console.log('this.auth', this.auth);
    }); 
  }

  getUsersServiceID( id ) {
      AuthFactory.get(id).then((data) => {
        this.auth = data;
        console.log('this.auth id', this.auth);
      });
      
    }

  // getUser() {
  //   console.log('get user', this.http.get('http://localhost:3000/api/v1/users'));
  // }
}
