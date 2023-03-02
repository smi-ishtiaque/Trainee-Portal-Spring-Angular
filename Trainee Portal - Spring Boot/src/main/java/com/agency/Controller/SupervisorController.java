
package com.agency.Controller;

import com.agency.Repo.SupervisorRepo;
import com.agency.Model.SupervisorModel;
import com.agency.Service.SupervisorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SupervisorController {
@Autowired
SupervisorService sl;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_supervisor")
public List<SupervisorModel> getLogin() {
	
	return sl.getAllLogin();

}

@PostMapping("viewSupervisor")
public SupervisorModel getSupervisor(@RequestBody SupervisorModel id) {
	String id1=id.getEmail();
	return sl.getSupervisorById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_supervisor")
public void saveSupervisor(@RequestBody SupervisorModel ll) {
	
	sl.saveSupervisor(ll);

}


@PostMapping("update_supervisor")
public void updateSupervisor(@RequestBody SupervisorModel ll) {
	
	sl.updateSupervisor(ll);

}

@PostMapping("delete_supervisor")
public void deleteSupervisor(@RequestBody SupervisorModel id) {
	
	sl.deleteSupervisor(id);

}

@Autowired
private SupervisorRepo gDOA;
@PostMapping("login_supervisor")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody SupervisorModel userData){
	SupervisorModel user=gDOA.findByEmail(userData.getEmail());
	System.out.println(user);
	if(user.getPassword().equals(userData.getPassword()))
		return ResponseEntity.ok(user);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	



//@PostMapping("insert")
//@CrossOrigin(origins="http://localhost:4200")
//public void save(@RequestBody StudentModel ll)throws Exception {
//	String tempEmailId=ll.getEmailid();
//	if(tempEmailId != null && !"".equals(tempEmailId)) {
//		StudentModel llobj=l.fetchUserByEmail(tempEmailId);
//		if(llobj !=null) {
//			throw new Exception("user with"+tempEmailId+"already exist");
//		}
//	}
//	
//	l.saveUser(ll);
//
//}


}
