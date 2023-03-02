import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ntsdashboard',
  templateUrl: './ntsdashboard.component.html',
  styleUrls: ['./ntsdashboard.component.css']
})
export class NtsdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  trainee(){
    this.router.navigateByUrl("/ntsmarksheet");
  }

  marksheet(){
    this.router.navigateByUrl("/ntsbonus");
  }
}
