import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-acourse',
  templateUrl: './acourse.component.html',
  styleUrls: ['./acourse.component.css']
})
export class AcourseComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addTSP(insert.value).subscribe();
    alert('You Have successfully added TSP');
    window.location.reload();
  }

  
  deleteLoginpage(data:any){
    this.ps.deleteTSP(data.value).subscribe();
    alert('You Have successfully deleted TSP');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewTSP().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }
 
    div1:boolean=false;
    div2:boolean=false;
    div3:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false;
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false;
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false;
    }
  
    div4Function(){
      this.div2=false;
      this.div1=false;
      this.div3=false;
  }

}
