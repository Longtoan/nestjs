import { Injectable } from '@angular/core';
import { URL,Student} from './interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ConnectApiService {
  url = URL;
  constructor(private _Http: HttpClient) {}

  getStudent() {
    return this._Http.get(`${this.url}/student`);
  }

  addStudent(body): Observable<Student> {
    return this._Http.post<Student>(`${this.url}/student`, JSON.stringify(body))
  }
  deleteStudent(id: string) {
    return this._Http.delete(`${this.url}/student/${id}`, {
      responseType: 'text'
    });
  }
}
