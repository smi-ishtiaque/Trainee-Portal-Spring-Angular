import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';


@Component({
  selector: 'app-afaculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  dd(){
    this.router.navigateByUrl("/ddfaculties");
  }
  nt(){
    this.router.navigateByUrl("/ntfaculties");
  }
  jee(){
    this.router.navigateByUrl("/jeefaculties");
  }
}
