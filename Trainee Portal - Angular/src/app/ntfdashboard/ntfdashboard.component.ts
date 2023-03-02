import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ntfdashboard',
  templateUrl: './ntfdashboard.component.html',
  styleUrls: ['./ntfdashboard.component.css']
})
export class NtfdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  trainee(){
    this.router.navigateByUrl("/ntftrainee");
  }

  marksheet(){
    this.router.navigateByUrl("/ntfmarksheet");
  }

  // notice(){
  //   this.router.navigateByUrl("/mefnotice");
  // }
}
