import { Component, OnInit } from '@angular/core';
import { Student } from '../../interface';
import { MatDialogRef } from '@angular/material/dialog';
import { ConnectApiService } from '../../connect-api.service';
// import { FormGroup, FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'qlsv-viewdialog',
  templateUrl: './viewdialog.component.html',
  styleUrls: ['./viewdialog.component.scss']
})
export class ViewdialogComponent implements OnInit {
  formstudent = new Student();
  
  constructor(
    private dialogRef: MatDialogRef<ViewdialogComponent>,
    private _API: ConnectApiService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addStudent() {
   const add =  this._API.addStudent(this.formstudent).subscribe(
      d => {
        console.log(d);
      },
      e => {
        console.log(e);
      }
    );
    if(add){

    }
  }
  ngOnInit() {}
}
