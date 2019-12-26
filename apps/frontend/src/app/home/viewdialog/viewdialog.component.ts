import { Component, OnInit } from '@angular/core';
import { Student } from '../../interface';
import {MatDialogRef,} from '@angular/material/dialog';
import {ConnectApiService} from "../../connect-api.service"
@Component({
  selector: 'qlsv-viewdialog',
  templateUrl: './viewdialog.component.html',
  styleUrls: ['./viewdialog.component.scss']
})
export class ViewdialogComponent implements OnInit {
  formStudent: Student;
  constructor(private dialogRef: MatDialogRef<ViewdialogComponent>, private _API: ConnectApiService) { }
  onNoClick():void{
    this.dialogRef.close()
  }
  addStudent() {
    this._API.addStudent(this.formStudent).then(d => {
      return d
    });
  }
  ngOnInit() {
  }

}
