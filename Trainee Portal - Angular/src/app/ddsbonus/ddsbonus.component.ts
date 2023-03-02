import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-ddsbonus',
  templateUrl: './ddsbonus.component.html',
  styleUrls: ['./ddsbonus.component.css']
})
export class DdsbonusComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private router:Router) {

   }

  insertdetails(insert:any){
    this.is.addBonus(insert.value).subscribe();
    alert('You have successfully added your bonus!');
    window.location.reload();
  }


}
