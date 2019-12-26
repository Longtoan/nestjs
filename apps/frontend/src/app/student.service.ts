import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
// import { Student } from "../app/data/data";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() {}
  // student: Student[] = [
  //   {
  //     id: 1,
  //     Firstname: 'Le',
  //     Lastname: 'LongToan',
  //     result: 'Khá'
  //   },
  //   {
  //     id: 2,
  //     Firstname: 'Nguyễn',
  //     Lastname: 'Văn A',
  //     result: 'Trung Bình'
  //   },
  //   {
  //     id: 3,
  //     Firstname: 'Nguyễn',
  //     Lastname: 'Văn A',
  //     result: 'Trung Bình'
  //   }
  // ];

  // getAllStudent(): Observable<any> {
  //   return of(this.student)
  // }
}
