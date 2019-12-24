import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../data/data';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'qlsv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  student: Student[];
  constructor(private studentSer: StudentService) {}

  displayedColumns: string[] = ['Stt', 'lastname', 'firstname', 'result'];
  dataSource = new MatTableDataSource(this.studentSer.student);
  

  // getStudent(){
  //   this.studentSer.getAllStudent().subscribe(d =>{
  //     this.student=d
  //   })
  // }
  ngOnInit() {
    // this.getStudent()
  }
  
}
