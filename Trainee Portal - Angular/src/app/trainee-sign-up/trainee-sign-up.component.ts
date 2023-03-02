import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-trainee-sign-up',
  templateUrl: './trainee-sign-up.component.html',
  styleUrls: ['./trainee-sign-up.component.css']
})
export class TraineeSignUpComponent implements OnInit {
  
  constructor(private is:InsertService,private router:Router) { }

  ngOnInit(): void {
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
  
  insertdetails1(insert:any){
    this.is.addTrainee(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click1();
  }
  click1(){
    this.router.navigateByUrl("/trainee");
   
  }

  insertdetails2(insert:any){
    this.is.addNTTrainee(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click2();
  }
  click2(){
    this.router.navigateByUrl("/trainee");
   
  }

  insertdetails3(insert:any){
    this.is.addJEETrainee(insert.value).subscribe();
    alert("Your are successfully signUp");
    this.click3();
  }
  click3(){
    this.router.navigateByUrl("/trainee");
   
  }


}

