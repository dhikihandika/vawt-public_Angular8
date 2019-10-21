import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service/main-service.service'
<<<<<<< HEAD
       
=======
>>>>>>> 5d5f10ac14c4c29909bea62d3159c312a5d67b5f

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
 

<<<<<<< HEAD
}
=======
 
}
>>>>>>> 5d5f10ac14c4c29909bea62d3159c312a5d67b5f
