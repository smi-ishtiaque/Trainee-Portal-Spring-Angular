import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/
/*import { CarouselModule } from 'ngx-owl-carousel-o';*/
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { DDComponent } from './dd/dd.component';
import { NTComponent } from './nt/nt.component';
import { JEEComponent } from './jee/jee.component';
import { TPComponent } from './tp/tp.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopRecComponent } from './top-rec/top-rec.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { IntroComponent } from './intro/intro.component';
import { FacultySignUpComponent } from './faculty-sign-up/faculty-sign-up.component';
import { TraineeSignUpComponent } from './trainee-sign-up/trainee-sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FacultypanelComponent } from './facultypanel/facultypanel.component';
import { TraineepanelComponent } from './traineepanel/traineepanel.component';
import { UserComponent } from './user/user.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { TraineeComponent } from './trainee/trainee.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { AsupervisorComponent } from './asupervisor/asupervisor.component';
import { AcourseComponent } from './acourse/acourse.component';
import { AmarksheetComponent } from './amarksheet/amarksheet.component';
import { AnotificationComponent } from './anotification/anotification.component';
import { JeetraineeComponent } from './jeetrainee/jeetrainee.component';
import { NttraineeComponent } from './nttrainee/nttrainee.component';
import { DdtraineeComponent } from './ddtrainee/ddtrainee.component';
import { DdfacultiesComponent } from './ddfaculties/ddfaculties.component';
import { NtfacultiesComponent } from './ntfaculties/ntfaculties.component';
import { JeefacultiesComponent } from './jeefaculties/jeefaculties.component';
import { JeemarksheetComponent } from './jeemarksheet/jeemarksheet.component';
import { NtmarksheetComponent } from './ntmarksheet/ntmarksheet.component';
import { DdmarksheetComponent } from './ddmarksheet/ddmarksheet.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { DdfdashboardComponent } from './ddfdashboard/ddfdashboard.component';
import { DdftraineeComponent } from './ddftrainee/ddftrainee.component';
import { DdfmarksheetComponent } from './ddfmarksheet/ddfmarksheet.component';
import { DdfnoticeComponent } from './ddfnotice/ddfnotice.component';
import { NtfacultypanelComponent } from './ntfacultypanel/ntfacultypanel.component';
import { NtfdashboardComponent } from './ntfdashboard/ntfdashboard.component';
import { NtfmarksheetComponent } from './ntfmarksheet/ntfmarksheet.component';
import { NtfnoticeComponent } from './ntfnotice/ntfnotice.component';
import { NtftraineeComponent } from './ntftrainee/ntftrainee.component';
import { JeefacultypanelComponent } from './jeefacultypanel/jeefacultypanel.component';
import { JeefdashboardComponent } from './jeefdashboard/jeefdashboard.component';
import { JeefmarksheetComponent } from './jeefmarksheet/jeefmarksheet.component';
import { JeefnoticeComponent } from './jeefnotice/jeefnotice.component';
import { JeeftraineeComponent } from './jeeftrainee/jeeftrainee.component';
import { JeetraineepanelComponent } from './jeetraineepanel/jeetraineepanel.component';
import { JeesdashboardComponent } from './jeesdashboard/jeesdashboard.component';
import { JeesmarksheetComponent } from './jeesmarksheet/jeesmarksheet.component';
import { JeesnoticeComponent } from './jeesnotice/jeesnotice.component';
import { JeesbonusComponent } from './jeesbonus/jeesbonus.component';
import { NttraineepanelComponent } from './nttraineepanel/nttraineepanel.component';
import { NtsdashboardComponent } from './ntsdashboard/ntsdashboard.component';
import { NtsmarksheetComponent } from './ntsmarksheet/ntsmarksheet.component';
import { NtsnoticeComponent } from './ntnotice/ntsnotice.component';
import { NtsbonusComponent } from './ntsbonus/ntsbonus.component';
import { DdsdashboardComponent } from './ddsdashboard/ddsdashboard.component';
import { DdsmarksheetComponent } from './ddsmarksheet/ddsmarksheet.component';
import { DdsnoticeComponent } from './ddsnotice/ddsnotice.component';
import { DdsbonusComponent } from './ddsbonus/ddsbonus.component';
import { BlogComponent } from './blog/blog.component';
import { TimelineComponent } from './timeline/timeline.component';







@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
  
    HeaderComponent,
    FooterComponent,
  
    MiddleComponent,
    NavigationComponent,
    AboutComponent,
  
    CoursesComponent,
    TeamComponent,
    TestimonialComponent,
    DDComponent,
    NTComponent,
    JEEComponent,
    TPComponent,
    ContactUsComponent,
    TopRecComponent,
    AdminComponent,
    FacultyComponent,
    StudentComponent,
    SignUpComponent,
    ContactComponent,
    JoinNowComponent,
    IntroComponent,
    FacultySignUpComponent,
    TraineeSignUpComponent,
    AdminpanelComponent,
    FacultypanelComponent,
    TraineepanelComponent,
    UserComponent,
    AdashboardComponent,
    TraineeComponent,
    FacultiesComponent,
    AsupervisorComponent,
    AcourseComponent,
    AmarksheetComponent,
    AnotificationComponent,
    JeetraineeComponent,
    NttraineeComponent,
    DdtraineeComponent,
    DdfacultiesComponent,
    NtfacultiesComponent,
    JeefacultiesComponent,
    JeemarksheetComponent,
    NtmarksheetComponent,
    DdmarksheetComponent,
    DdfdashboardComponent,
    DdftraineeComponent,
    DdfmarksheetComponent,
    DdfnoticeComponent,
    NtfacultypanelComponent,
    NtfdashboardComponent,
    NtfmarksheetComponent,
    NtfnoticeComponent,
    NtftraineeComponent,
    JeefacultypanelComponent,
    JeefdashboardComponent,
    JeefmarksheetComponent,
    JeefnoticeComponent,
    JeeftraineeComponent,
    JeetraineepanelComponent,
    JeesdashboardComponent,
    JeesmarksheetComponent,
    JeesnoticeComponent,
    JeesbonusComponent,
    NttraineepanelComponent,
    NtsdashboardComponent,
    NtsmarksheetComponent,
    NtsnoticeComponent,
    NtsbonusComponent,
    DdsdashboardComponent,
    DdsmarksheetComponent,
    DdsnoticeComponent,
    DdsbonusComponent,
    BlogComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*BrowserAnimationsModule,*/
    /*CarouselModule,*/
    FormsModule,
    HttpClientModule,
    
    BackButtonDisableModule.forRoot({preserveScrollPosition:false})
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
