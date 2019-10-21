import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service/main-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  dataList: any = [];

  ngOnInit() {
    this.loadReports();
  }

  constructor(
    public mainService: MainServiceService
  ) { }

  // Data List
  loadReports(){
    return this.mainService.Getdata().subscribe((data:{})=>{
      this.dataList=data;
    })
  }
 
}

