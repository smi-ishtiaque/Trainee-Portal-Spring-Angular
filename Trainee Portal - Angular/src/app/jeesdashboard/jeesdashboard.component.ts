import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeesdashboard',
  templateUrl: './jeesdashboard.component.html',
  styleUrls: ['./jeesdashboard.component.css']
})
export class JeesdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  trainee(){
    this.router.navigateByUrl("/jeesmarksheet");
  }

  marksheet(){
    this.router.navigateByUrl("/jeesbonus");
  }

}
