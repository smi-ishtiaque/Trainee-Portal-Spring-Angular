import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-ddfmarksheet',
  templateUrl: './ddfmarksheet.component.html',
  styleUrls: ['./ddfmarksheet.component.css']
})
export class DdfmarksheetComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addDDMarksheet(insert.value).subscribe();
    alert('You Have successfully added trainee marks');
    window.location.reload();
  }

  loginpage:any;
  updateLoginpage(data:any){
    this.ps1.updateDDMarksheet(data.value).subscribe();
    alert('You Have successfully updated trainee marks');
    window.location.reload();
  }

  deleteLoginpage(data:any){
    this.ps.deleteDDMarksheet(data.value).subscribe();
    alert('You Have successfully deleted trainee marks');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewDDMarksheet().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }
 
    div1:boolean=false;
    div2:boolean=false;
    div3:boolean=false;
    div4:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false;
        this.div4=false;
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false;
        this.div4=false;
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false;
        this.div4=false;
    }
  
    div4Function(){
      this.div4=true;
      this.div2=false;
      this.div1=false;
      this.div3=false;
  }

    div5Function(){
    this.div4=false;
    this.div2=false;
    this.div1=false;
    this.div3=false;
  }
}
