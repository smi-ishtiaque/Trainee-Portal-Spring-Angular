import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-ntsmarksheet',
  templateUrl: './ntsmarksheet.component.html',
  styleUrls: ['./ntsmarksheet.component.css']
})
export class NtsmarksheetComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

   loginpages:any;
  viewLoginpage(){
    this.is.viewNTMarksheet().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }
}
