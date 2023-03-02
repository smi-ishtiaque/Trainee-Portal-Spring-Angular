import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }

  
  url5="http://localhost:8080/insertadmin"
  url6="http://localhost:8080/loginadmin"
  url7="http://localhost:8080/viewadmin"

  url1="http://localhost:8080/add_ddtrainee"
  url2="http://localhost:8080/login_ddtrainee"
  url3="http://localhost:8080/view_ddtrainee"
  url11="http://localhost:8080/update_ddtrainee"
  url12="http://localhost:8080/delete_ddtrainee"

  url15="http://localhost:8080/add_nttrainee"
  url16="http://localhost:8080/login_nttrainee"
  url17="http://localhost:8080/view_nttrainee"
  url18="http://localhost:8080/update_nttrainee"
  url19="http://localhost:8080/delete_nttrainee"

  url20="http://localhost:8080/add_jeetrainee"
  url21="http://localhost:8080/login_jeetrainee"
  url22="http://localhost:8080/view_jeetrainee"
  url23="http://localhost:8080/update_jeetrainee"
  url24="http://localhost:8080/delete_jeetrainee"

  url8="http://localhost:8080/add_ddfaculty"
  url9="http://localhost:8080/login_ddfaculty"
  url10="http://localhost:8080/view_ddfaculty"
  url13="http://localhost:8080/update_ddfaculty"
  url14="http://localhost:8080/delete_ddfaculty"

  url25="http://localhost:8080/add_ntfaculty"
  url26="http://localhost:8080/login_ntfaculty"
  url27="http://localhost:8080/view_ntfaculty"
  url28="http://localhost:8080/update_ntfaculty"
  url29="http://localhost:8080/delete_ntfaculty"

  url30="http://localhost:8080/add_jeefaculty"
  url31="http://localhost:8080/login_jeefaculty"
  url32="http://localhost:8080/view_jeefaculty"
  url33="http://localhost:8080/update_jeefaculty"
  url34="http://localhost:8080/delete_jeefaculty"

  url35="http://localhost:8080/add_supervisor"
  url36="http://localhost:8080/login_supervisor"
  url37="http://localhost:8080/view_supervisor"
  url38="http://localhost:8080/update_supervisor"
  url39="http://localhost:8080/delete_supervisor"


  url40="http://localhost:8080/add_tsp"
  url41="http://localhost:8080/view_tsp"
  url42="http://localhost:8080/delete_tsp"


  url43="http://localhost:8080/addnotify"
  url44="http://localhost:8080/viewnotify"
  url45="http://localhost:8080/deletenotify"


  url46="http://localhost:8080/add_ddmarksheet"
  url47="http://localhost:8080/view_ddmarksheet"
  url48="http://localhost:8080/delete_ddmarksheet"
  url49="http://localhost:8080/update_ddmarksheet"

  url50="http://localhost:8080/add_bonus"
  url51="http://localhost:8080/view_bonus"

  url52="http://localhost:8080/add_jeemarksheet"
  url53="http://localhost:8080/view_jeemarksheet"
  url54="http://localhost:8080/delete_jeemarksheet"
  url55="http://localhost:8080/update_jeemarksheet"

  url56="http://localhost:8080/add_ntmarksheet"
  url57="http://localhost:8080/view_ntmarksheet"
  url58="http://localhost:8080/delete_ntmarksheet"
  url59="http://localhost:8080/update_ntmarksheet"


  loginservice2(data3:any){
    return this.http.post(this.url6, data3);
  }

  public loginAdminFromRemote(admin:UserComponent):Observable<object>{
    console.log(admin);
    return this.http.post(this.url6,admin);
    
  }



  addTrainee(data:any){
    return this.http.post(this.url1, data);
  }
  viewTrainee(){
    return this.http.get(this.url3);
  }
  updateTrainee(value:any){
    return this.http.post(this.url11, value);
  }
  deleteTrainee(data:any){
    return this.http.post(this.url12, data);
  }

  loginservice1(data2:any){
    return this.http.post(this.url2, data2);
  }

  public loginUserFromRemote(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url2,user);
    
  }


  addNTTrainee(data:any){
    return this.http.post(this.url15, data);
  }
  viewNTTrainee(){
    return this.http.get(this.url17);
  }
  updateNTTrainee(value:any){
    return this.http.post(this.url18, value);
  }
  deleteNTTrainee(data:any){
    return this.http.post(this.url19, data);
  }

  loginservice1NT(data2:any){
    return this.http.post(this.url16, data2);
  }

  public loginUserFromRemoteNT(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url16,user);
    
  }


  addJEETrainee(data:any){
    return this.http.post(this.url20, data);
  }
  viewJEETrainee(){
    return this.http.get(this.url22);
  }
  updateJEETrainee(value:any){
    return this.http.post(this.url23, value);
  }
  deleteJEETrainee(data:any){
    return this.http.post(this.url24, data);
  }

  loginservice1JEE(data2:any){
    return this.http.post(this.url21, data2);
  }

  public loginUserFromRemoteJEE(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url21,user);
    
  }



  addDDFaculties(data:any){
    return this.http.post(this.url8, data);
  }
  viewDDFaculties(){
    return this.http.get(this.url10);
  }
  updateDDFaculties(value:any){
    return this.http.post(this.url13, value);
  }
  deleteDDFaculties(data:any){
    return this.http.post(this.url14, data);
  }

  loginservice3(data4:any){
    return this.http.post(this.url9, data4);
  }

  public loginFacultyFromRemote(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url9,faculty);
    
  }
  
  addNTFaculties(data:any){
    return this.http.post(this.url25, data);
  }
  viewNTFaculties(){
    return this.http.get(this.url27);
  }
  updateNTFaculties(value:any){
    return this.http.post(this.url28, value);
  }
  deleteNTFaculties(data:any){
    return this.http.post(this.url29, data);
  }

  loginservice3NT(data4:any){
    return this.http.post(this.url26, data4);
  }

  public loginFacultyFromRemoteNT(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url26,faculty);
    
  }


  addJEEFaculties(data:any){
    return this.http.post(this.url30, data);
  }
  viewJEEFaculties(){
    return this.http.get(this.url32);
  }
  updateJEEFaculties(value:any){
    return this.http.post(this.url33, value);
  }
  deleteJEEFaculties(data:any){
    return this.http.post(this.url34, data);
  }

  loginservice3JEE(data4:any){
    return this.http.post(this.url31, data4);
  }

  public loginFacultyFromRemoteJEE(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url31,faculty);
    
  }

  addSupervisor(data:any){
    return this.http.post(this.url35, data);
  }
  viewSupervisor(){
    return this.http.get(this.url37);
  }
  updateSupervisor(value:any){
    return this.http.post(this.url38, value);
  }
  deleteSupervisor(data:any){
    return this.http.post(this.url39, data);
  }

  loginservice3Staff(data4:any){
    return this.http.post(this.url36, data4);
  }

  public loginFacultyFromRemoteStaff(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url36,faculty);
    
  }


  addTSP(data:any){
    return this.http.post(this.url40, data);
  }
  viewTSP(){
    return this.http.get(this.url41);
  }
  deleteTSP(data:any){
    return this.http.post(this.url42, data);
  }


  addNotify(data:any){
    return this.http.post(this.url43, data);
  }
  viewNotify(){
    return this.http.get(this.url44);
  }
  deleteNotify(data:any){
    return this.http.post(this.url45, data);
  }


  addDDMarksheet(data:any){
    return this.http.post(this.url46, data);
  }
  viewDDMarksheet(){
    return this.http.get(this.url47);
  }
  updateDDMarksheet(value:any){
    return this.http.post(this.url49, value);
  }
  deleteDDMarksheet(data:any){
    return this.http.post(this.url48, data);
  }

  addBonus(data:any){
    return this.http.post(this.url50, data);
  }
  viewBonus(){
    return this.http.get(this.url51);
  }


  addJEEMarksheet(data:any){
    return this.http.post(this.url52, data);
  }
  viewJEEMarksheet(){
    return this.http.get(this.url53);
  }
  updateJEEMarksheet(value:any){
    return this.http.post(this.url54, value);
  }
  deleteJEEMarksheet(data:any){
    return this.http.post(this.url55, data);
  }


  addNTMarksheet(data:any){
    return this.http.post(this.url56, data);
  }
  viewNTMarksheet(){
    return this.http.get(this.url57);
  }
  updateNTMarksheet(value:any){
    return this.http.post(this.url58, value);
  }
  deleteNTMarksheet(data:any){
    return this.http.post(this.url59, data);
  }


}
