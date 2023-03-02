package com.agency.Controller;

import com.agency.Repo.DDTraineeRepo;
import com.agency.Model.DDTraineeModel;
import com.agency.Service.DDTraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class DDTraineeController {
@Autowired
DDTraineeService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_ddtrainee")
public List<DDTraineeModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("viewdd")
public DDTraineeModel getStudent(@RequestBody DDTraineeModel id) {
	String id1=id.getEmail();
	return l.getddTraineeById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_ddtrainee")
public void saveL(@RequestBody DDTraineeModel ll) {
	
	l.saveddTrainee(ll);

}


@PostMapping("update_ddtrainee")
public void updateL(@RequestBody DDTraineeModel ll) {
	
	l.updateddTrainee(ll);

}

@PostMapping("delete_ddtrainee")
public void deleteL(@RequestBody DDTraineeModel id) {
	
	l.deleteddTrainee(id);

}

@Autowired
private DDTraineeRepo gDOA;
@PostMapping("login_ddtrainee")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody DDTraineeModel userData){
	DDTraineeModel user=gDOA.findByEmail(userData.getEmail());
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
