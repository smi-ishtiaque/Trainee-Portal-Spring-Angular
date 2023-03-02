import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-ntsbonus',
  templateUrl: './ntsbonus.component.html',
  styleUrls: ['./ntsbonus.component.css']
})
export class NtsbonusComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private router:Router) {

  }

 insertdetails(insert:any){
   this.is.addBonus(insert.value).subscribe();
   alert('You have successfully deposited your bonus!');
   window.location.reload();
 }

}
