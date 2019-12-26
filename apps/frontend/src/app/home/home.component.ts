import { ViewdialogComponent } from './viewdialog/viewdialog.component';
import { Component, OnInit } from '@angular/core';
import { Student } from '../interface';
import { ConnectApiService } from '../connect-api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'qlsv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  student;
  formStudent: Student = null;
  constructor(private _API: ConnectApiService, private _dialog: MatDialog) {}

  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'age',
    'sex',
    'result',
    'action'
  ];
  
  getStudent() {
    this._API.getStudent().subscribe(d => {
      this.student = d;
    });
  }
  // addStudent() {
  //   console.log(this.formStudent)
  //   this._API.addStudent(this.formStudent).then(d => {
  //     return d
  //   });
  // }
  openDialog(): void {
    this._dialog.open(ViewdialogComponent, {
      width: '300px'
    });
  }
  ngOnInit() {
    this.getStudent();
  }
}
