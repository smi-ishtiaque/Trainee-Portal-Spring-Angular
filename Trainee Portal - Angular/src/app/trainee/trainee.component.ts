import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {
  
  constructor(private router:Router) {}

    
  ngOnInit(): void {
  }


  // constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

  //   this.viewLoginpage();
  //  }

  // insertdetails(insert:any){
  //   this.is.addStudent(insert.value).subscribe();
  //   alert('You Have successfully added student data');
  //   window.location.reload();
  // }

  // loginpage:any;
  // updateLoginpage(data:any){
  //   this.ps1.updateStudent(data.value).subscribe();
  //   alert('You Have successfully updated student data');
  //   window.location.reload();
  // }

  // deleteLoginpage(data:any){
  //   this.ps.deleteStudent(data.value).subscribe();
  //   alert('You Have successfully deleted student data');
  //   window.location.reload();
  // }

  // loginpages:any;
  // viewLoginpage(){
  //   this.is.viewStudent().subscribe((resp1:any)=>{this.loginpages=resp1;});
  // }
 
  //   div1:boolean=false;
  //   div2:boolean=false;
  //   div3:boolean=false;
  //   div4:boolean=false;

  //   div1Function(){
  //       this.div1=true;
  //       this.div2=false;
  //       this.div3=false;
  //       this.div4=false;
  //   }

  //   div2Function(){
  //       this.div2=true;
  //       this.div1=false;
  //       this.div3=false;
  //       this.div4=false;
  //   }

  //   div3Function(){
  //       this.div3=true;
  //       this.div2=false;
  //       this.div1=false;
  //       this.div4=false;
  //   }
  
  //   div4Function(){
  //     this.div4=true;
  //     this.div2=false;
  //     this.div1=false;
  //     this.div3=false;
  // }

  //   div5Function(){
  //   this.div4=false;
  //   this.div2=false;
  //   this.div1=false;
  //   this.div3=false;
  // }

dd(){
  this.router.navigateByUrl("/ddtrainee");
}
nt(){
  this.router.navigateByUrl("/nttrainee");
}
jee(){
  this.router.navigateByUrl("/jeetrainee");
}

}
