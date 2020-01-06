import { Component, OnInit } from '@angular/core';
import { Auth0Service } from "../auth0.service";
@Component({
  selector: 'qlsv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: Auth0Service) { }

  ngOnInit() {
    this.authService.parseAccessToken();

  }

}
