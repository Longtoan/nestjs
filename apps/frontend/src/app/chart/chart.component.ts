import { Component, OnInit } from '@angular/core';
import { ConnectApiService } from '../connect-api.service';
import { Student } from '../interface';
@Component({
  selector: 'qlsv-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  datastudent: Student[];
  view: any[] = [700, 400];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private _API: ConnectApiService) {
    
  }
  student(){
    this._API.getStudent().forEach(i=>{
      return i
    })
  }
  ngOnInit() {
    this.student()
  }
}
