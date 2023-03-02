import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeefdashboard',
  templateUrl: './jeefdashboard.component.html',
  styleUrls: ['./jeefdashboard.component.css']
})
export class JeefdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  trainee(){
    this.router.navigateByUrl("/jeeftrainee");
  }

  marksheet(){
    this.router.navigateByUrl("/jeefmarksheet");
  }

}
