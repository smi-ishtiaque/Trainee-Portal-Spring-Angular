import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ddfdashboard',
  templateUrl: './ddfdashboard.component.html',
  styleUrls: ['./ddfdashboard.component.css']
})
export class DdfdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/ddftrainee");
  }

  marksheet(){
    this.router.navigateByUrl("/ddfmarksheet");
  }

  // notice(){
  //   this.router.navigateByUrl("/mefnotice");
  // }

}
