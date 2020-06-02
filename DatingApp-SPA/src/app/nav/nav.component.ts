import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Successfully');
      console.log(localStorage.token);
    }, error => {
      console.log('Failed to login');
    });
  }
  loggedIn(){
    const token = localStorage.getItem('token');
    // shorthand if statement stating to return true if token has a value
    return !!token;
  }

  logout(){
    if (localStorage.token){
      console.log(localStorage.token + " Deleted");
      localStorage.removeItem('token');
      console.log('logged out');
    } else {
      console.log('not logged in');
    }
  }


}
