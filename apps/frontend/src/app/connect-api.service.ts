import { Injectable } from '@angular/core';
import {URL,Student} from './interface'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {
  url = URL
  constructor(private Http : HttpClient) { }
  getStudent(){
    return this.Http.get(`${this.url}/student`);
  }
  
}
