import { Injectable } from '@angular/core';
import { URL, Student } from './interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {
  url = URL;
  body: Student;
  constructor(private _Http: HttpClient) {}
  getStudent() {
    return this._Http.get(`${this.url}/student`);
  }

  addStudent(body) {
    return this._Http.post(`${this.url}/student`, body);
  }
  deleteStudent(id: string) {
    return this._Http.delete(`${this.url}/student/${id}`, {
      responseType: 'text'
    });
  }
}
