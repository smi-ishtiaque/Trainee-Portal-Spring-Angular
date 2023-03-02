import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-fmarksheet',
  templateUrl: './ntfmarksheet.component.html',
  styleUrls: ['./ntfmarksheet.component.css']
})
export class NtfmarksheetComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addNTMarksheet(insert.value).subscribe();
    alert('You Have successfully added student marks');
    window.location.reload();
  }

  loginpage:any;
  updateLoginpage(data:any){
    this.ps1.updateNTMarksheet(data.value).subscribe();
    alert('You Have successfully updated student marks');
    window.location.reload();
  }

  deleteLoginpage(data:any){
    this.ps.deleteNTMarksheet(data.value).subscribe();
    alert('You Have successfully deleted student marks');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewNTMarksheet().subscribe((resp1:any)=>{this.loginpages=resp1;});
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
