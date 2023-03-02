import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-jeestudents',
  templateUrl: './jeetrainee.component.html',
  styleUrls: ['./jeetrainee.component.css']
})
export class JeetraineeComponent implements OnInit {

  
  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addJEETrainee(insert.value).subscribe();
    alert('You Have Successfully Added Trainee Data!');
    window.location.reload();
  }

  loginpage:any;
  updateLoginpage(data:any){
    this.ps1.updateJEETrainee(data.value).subscribe();
    alert('You Have Successfully Added Trainee Data!');
    window.location.reload();
  }

  deleteLoginpage(data:any){
    this.ps.deleteJEETrainee(data.value).subscribe();
    alert('You Have Successfully Added Trainee Data!');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewJEETrainee().subscribe((resp1:any)=>{this.loginpages=resp1;});
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
