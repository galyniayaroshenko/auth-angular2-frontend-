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
  
  users: any;
  
   getUsersService() {
    this.users = [];
  
    AuthFactory.getAll().then((data) => {
      this.users = data.users;
      console.log('this.users', this.users);
    }); 
  }

  // getUser() {
  //   console.log('get user', this.http.get('http://localhost:3000/api/v1/users'));
  // }
}
