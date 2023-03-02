import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  trainee(){
    this.router.navigateByUrl("/trainee");
  }

  faculties(){
    this.router.navigateByUrl("/afaculties");
  }

  supervisor(){
    this.router.navigateByUrl("/asupervisor");
  }

  courses(){
    this.router.navigateByUrl("/acourse");
  }
}
