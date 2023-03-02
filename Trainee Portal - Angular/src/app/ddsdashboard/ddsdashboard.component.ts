import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ddsdashboard',
  templateUrl: './ddsdashboard.component.html',
  styleUrls: ['./ddsdashboard.component.css']
})
export class DdsdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  
  trainee(){
    this.router.navigateByUrl("/ddsmarksheet");
  }

  marksheet(){
    this.router.navigateByUrl("/ddsbonus");
  }

  // notice(){
  //   this.router.navigateByUrl("/mefnotice");
  // }
}
