import { ViewdialogComponent } from './viewdialog/viewdialog.component';
import { Component, OnInit } from '@angular/core';
import { Auth0Service } from "../auth0.service"; 
import { ConnectApiService } from '../connect-api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'qlsv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  student;
  constructor(private _API: ConnectApiService, private _dialog: MatDialog,private authService: Auth0Service) {}

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
    })
  }
  deleid(id){
    this._API.deleteStudent(id).subscribe(d=>{
      this.getStudent()
    })
  }
  openDialog(): void {
    this._dialog.open(ViewdialogComponent, {
      width: '300px'
    });
  }
  login(){
    this.authService.author()
  }
  ngOnInit() {
    this.getStudent();
  }
}
