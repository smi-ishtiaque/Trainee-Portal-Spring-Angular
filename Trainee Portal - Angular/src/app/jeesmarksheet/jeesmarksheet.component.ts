import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-jeesmarksheet',
  templateUrl: './jeesmarksheet.component.html',
  styleUrls: ['./jeesmarksheet.component.css']
})
export class JeesmarksheetComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

   loginpages:any;
  viewLoginpage(){
    this.is.viewJEEMarksheet().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }

}
