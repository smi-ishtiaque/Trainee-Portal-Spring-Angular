import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcourseComponent } from './acourse/acourse.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { AmarksheetComponent } from './amarksheet/amarksheet.component';
import { AnotificationComponent } from './anotification/anotification.component';
import { AsupervisorComponent } from './asupervisor/asupervisor.component';
import { TraineeComponent } from './trainee/trainee.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JEEComponent } from './jee/jee.component';
import { JeefacultiesComponent } from './jeefaculties/jeefaculties.component';
import { JeefacultypanelComponent } from './jeefacultypanel/jeefacultypanel.component';
import { JeefdashboardComponent } from './jeefdashboard/jeefdashboard.component';
import { JeefmarksheetComponent } from './jeefmarksheet/jeefmarksheet.component';
import { JeefnoticeComponent } from './jeefnotice/jeefnotice.component';
import { JeeftraineeComponent } from './jeeftrainee/jeeftrainee.component';
import { JeesdashboardComponent } from './jeesdashboard/jeesdashboard.component';
import { JeesbonusComponent } from './jeesbonus/jeesbonus.component';
import { JeesmarksheetComponent } from './jeesmarksheet/jeesmarksheet.component';
import { JeesnoticeComponent } from './jeesnotice/jeesnotice.component';
import { JeetraineeComponent } from './jeetrainee/jeetrainee.component';
import { ContactComponent } from './contact/contact.component';
import { NTComponent } from './nt/nt.component';
import { NtfacultiesComponent } from './ntfaculties/ntfaculties.component';
import { NtfacultypanelComponent } from './ntfacultypanel/ntfacultypanel.component';
import { NtfdashboardComponent } from './ntfdashboard/ntfdashboard.component';
import { NtfmarksheetComponent } from './ntfmarksheet/ntfmarksheet.component';
import { NtfnoticeComponent } from './ntfnotice/ntfnotice.component';
import { NtftraineeComponent } from './ntftrainee/ntftrainee.component';
import { NtsdashboardComponent } from './ntsdashboard/ntsdashboard.component';
import { NtsbonusComponent } from './ntsbonus/ntsbonus.component';
import { NtsmarksheetComponent } from './ntsmarksheet/ntsmarksheet.component';
import { NtsnoticeComponent } from './ntnotice/ntsnotice.component';
import { NttraineepanelComponent } from './nttraineepanel/nttraineepanel.component';
import { NttraineeComponent } from './nttrainee/nttrainee.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultypanelComponent } from './facultypanel/facultypanel.component';
import { HomeComponent } from './home/home.component';
import { DDComponent } from './dd/dd.component';
import { DdfacultiesComponent } from './ddfaculties/ddfaculties.component';
import { DdfdashboardComponent } from './ddfdashboard/ddfdashboard.component';
import { DdfmarksheetComponent } from './ddfmarksheet/ddfmarksheet.component';
import { DdfnoticeComponent } from './ddfnotice/ddfnotice.component';
import { DdftraineeComponent } from './ddftrainee/ddftrainee.component';
import { DdsdashboardComponent } from './ddsdashboard/ddsdashboard.component';
import { DdsbonusComponent } from './ddsbonus/ddsbonus.component';
import { DdsmarksheetComponent } from './ddsmarksheet/ddsmarksheet.component';
import { DdsnoticeComponent } from './ddsnotice/ddsnotice.component';
import { DdtraineeComponent } from './ddtrainee/ddtrainee.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TraineeSignUpComponent } from './trainee-sign-up/trainee-sign-up.component';
import { StudentComponent } from './student/student.component';
import { TraineepanelComponent } from './traineepanel/traineepanel.component';
import { TopRecComponent } from './top-rec/top-rec.component';
import { TPComponent } from './tp/tp.component';
import { JeetraineepanelComponent } from './jeetraineepanel/jeetraineepanel.component';
import { BlogComponent } from './blog/blog.component';
import { TimelineComponent } from './timeline/timeline.component';



const routes: Routes = [
  {path:'home', component : HomeComponent},
  {path:'about', component : AboutComponent,},
  {path:'blog', component : BlogComponent},
  {path:'sign-up', component : SignUpComponent},
  {path:'contact', component : ContactComponent},
  {path:'timeline', component : TimelineComponent},
  {path:'dd', component : DDComponent},
  {path:'nt', component : NTComponent},
  {path:'jee', component : JEEComponent},
  {path:'tp', component : TPComponent},
  {path:'contact-us', component : ContactUsComponent},
  {path:'top-rec', component : TopRecComponent},
  {path:'admin', component : AdminComponent,data: { title:'', navigation: true,footer: true}},
  {path:'faculty', component : FacultyComponent,data: { title:'', navigation: true,footer: true}},
  {path:'student', component : StudentComponent,data: { title:'', navigation: true,footer: true}},
  {path:'trainee-sign-up', component : TraineeSignUpComponent},
  {path:'adminpanel', component : AdminpanelComponent,data: { title:'adminpanel', navigation: false,footer: false}},
  {path:'facultypanel', component : FacultypanelComponent,data: { title:'facultypanel', navigation: false,footer: false}},
  {path:'traineepanel', component : TraineepanelComponent,data: { title:'traineepanel', navigation: false,footer: false}},
  {path:'acourse', component : AcourseComponent,data: { title:'acourse', navigation: false,footer: false}},
  {path:'adashboard', component : AdashboardComponent,data: { title:'adashboard', navigation: false,footer: false}},
  {path:'faculties', component : FacultiesComponent,data: { title:'faculties', navigation: false,footer: false}},
  {path:'amarksheet', component : AmarksheetComponent,data: { title:'amarksheet', navigation: false,footer: false}},
  {path:'anotification', component : AnotificationComponent,data: { title:'anotification', navigation: false,footer: false}},
  {path:'asupervisor', component : AsupervisorComponent,data: { title:'asupervisor', navigation: false,footer: false}},
  {path:'trainee', component : TraineeComponent,data: { title:'trainee', navigation: false,footer: false}},
  {path:'ddtrainee', component : DdtraineeComponent,data: { title:'ddtrainee', navigation: false,footer: false}},
  {path:'nttrainee', component : NttraineeComponent,data: { title:'nttrainee', navigation: false,footer: false}},
  {path:'jeetrainee', component : JeetraineeComponent,data: { title:'jeetrainee', navigation: false,footer: false}},
  {path:'ddfaculties', component : DdfacultiesComponent,data: { title:'ddfaculties', navigation: false,footer: false}},
  {path:'ntfaculties', component : NtfacultiesComponent,data: { title:'ntfaculties', navigation: false,footer: false}},
  {path:'jeefaculties', component : JeefacultiesComponent,data: { title:'jeefaculties', navigation: false,footer: false}},

  {path:'ddfdashboard', component : DdfdashboardComponent,data: { title:'ddfdashboard', navigation: false,footer: false}},
  {path:'ddfmarksheet', component : DdfmarksheetComponent,data: { title:'ddfmarksheet', navigation: false,footer: false}},
  {path:'ddfnotice', component : DdfnoticeComponent,data: { title:'ddfnotice', navigation: false,footer: false}},
  {path:'ddftrainee', component : DdftraineeComponent,data: { title:'ddftrainee', navigation: false,footer: false}},

  {path:'ntfacultypanel', component : NtfacultypanelComponent,data: { title:'ntfacultypanel', navigation: false,footer: false}},
  {path:'ntfdashboard', component : NtfdashboardComponent,data: { title:'ntfdashboard', navigation: false,footer: false}},
  {path:'ntfmarksheet', component : NtfmarksheetComponent,data: { title:'ntfmarksheet', navigation: false,footer: false}},
  {path:'ntfnotice', component : NtfnoticeComponent,data: { title:'ntfnotice', navigation: false,footer: false}},
  {path:'ntftrainee', component : NtftraineeComponent,data: { title:'ntftrainee', navigation: false,footer: false}},

  {path:'jeefacultypanel', component : JeefacultypanelComponent,data: { title:'jeefacultypanel', navigation: false,footer: false}},
  {path:'jeefdashboard', component : JeefdashboardComponent,data: { title:'jeefdashboard', navigation: false,footer: false}},
  {path:'jeefmarksheet', component : JeefmarksheetComponent,data: { title:'jeefmarksheet', navigation: false,footer: false}},
  {path:'jeefnotice', component : JeefnoticeComponent,data: { title:'jeefnotice', navigation: false,footer: false}},
  {path:'jeeftrainee', component : JeeftraineeComponent,data: { title:'jeeftrainee', navigation: false,footer: false}},

  {path:'ddsdashboard', component : DdsdashboardComponent,data: { title:'ddsdashboard', navigation: false,footer: false}},
  {path:'ddsmarksheet', component : DdsmarksheetComponent,data: { title:'ddsmarksheet', navigation: false,footer: false}},
  {path:'ddsnotice', component : DdsnoticeComponent,data: { title:'ddsnotice', navigation: false,footer: false}},
  {path:'ddsbonus', component : DdsbonusComponent,data: { title:'ddsbonus', navigation: false,footer: false}},

  {path:'nttraineepanel', component : NttraineepanelComponent,data: { title:'nttraineepanel', navigation: false,footer: false}},
  {path:'ntsdashboard', component : NtsdashboardComponent,data: { title:'ntsdashboard', navigation: false,footer: false}},
  {path:'ntsmarksheet', component : NtsmarksheetComponent,data: { title:'ntsmarksheet', navigation: false,footer: false}},
  {path:'ntsnotice', component : NtsnoticeComponent,data: { title:'ntsnotice', navigation: false,footer: false}},
  {path:'ntsbonus', component : NtsbonusComponent,data: { title:'ntsbonus', navigation: false,footer: false}},

  {path:'jeetraineepanel', component : JeetraineepanelComponent,data: { title:'jeetraineepanel', navigation: false,footer: false}},
  {path:'jeeesdashboard', component : JeesdashboardComponent,data: { title:'jeesdashboard', navigation: false,footer: false}},
  {path:'jeesmarksheet', component : JeesmarksheetComponent,data: { title:'jeesmarksheet', navigation: false,footer: false}},
  {path:'jeesnotice', component : JeesnoticeComponent,data: { title:'jeesnotice', navigation: false,footer: false}},
  {path:'jeesbonus', component : JeesbonusComponent,data: { title:'jeesbonus', navigation: false,footer: false}},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
