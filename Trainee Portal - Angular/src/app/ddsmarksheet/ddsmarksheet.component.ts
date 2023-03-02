import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-ddsmarksheet',
  templateUrl: './ddsmarksheet.component.html',
  styleUrls: ['./ddsmarksheet.component.css']
})
export class DdsmarksheetComponent implements OnInit {

 
  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

   loginpages:any;
  viewLoginpage(){
    this.is.viewDDMarksheet().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }

}
