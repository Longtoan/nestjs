import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
@Injectable({
  providedIn: 'root'
})
export class Auth0Service {
  private auth0: auth0.WebAuth;
  private authOptions: auth0.AuthOptions;

  constructor() {
    this.authOptions = {
      domain: 'dev-longtoan.auth0.com',
      clientID: 'lKess9371129jyHez5v2lQy4kU3RcfDJ'
    };
    this.auth0 = new auth0.WebAuth(this.authOptions);
  }
  public author() {
    this.auth0.authorize({
      redirectUri: 'http://localhost:4200/authorise',
      responseType: 'token id_token'
    });
  }
  public parseAccessToken() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult) {
        return authResult;
      }
      return err;
    });
  }
}
