import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service/main-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataLast: any=[];
  ngOnInit() {
    this.loadDashboard();
  }

  constructor(
    public mainService: MainServiceService
  ) { }

   // Data List
   loadDashboard(){
    return this.mainService.Getdatalast().subscribe((data:{})=>{
      this.dataLast=data;
    })
  }

 
}
