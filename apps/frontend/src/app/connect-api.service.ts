import { Injectable } from '@angular/core';
import {URL,Student} from './interface'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {
  url = URL
  constructor(private _Http : HttpClient) { }
  
  getStudent(){
    return this._Http.get(`${this.url}/student`);
  }

  addStudent(id){
    return this._Http.post(`${this.url}/student`,id,{responseType:"text"}).toPromise();
  }
  
}
