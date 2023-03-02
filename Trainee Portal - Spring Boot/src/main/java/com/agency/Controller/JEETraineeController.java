
package com.agency.Controller;

import com.agency.Repo.JEETraineeRepo;
import com.agency.Model.JEETraineeModel;
import com.agency.Service.JEETraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JEETraineeController {
@Autowired
JEETraineeService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_jeetrainee")
public List<JEETraineeModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("viewjee")
public JEETraineeModel getStudent(@RequestBody JEETraineeModel id) {
	String id1=id.getEmail();
	return l.getjeeTraineeById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_jeetrainee")
public void saveL(@RequestBody JEETraineeModel ll) {
	
	l.savejeeTrainee(ll);

}


@PostMapping("update_jeetrainee")
public void updateL(@RequestBody JEETraineeModel ll) {
	
	l.updatejeeTrainee(ll);

}

@PostMapping("delete_jeetrainee")
public void deleteL(@RequestBody JEETraineeModel id) {
	
	l.deletejeeTrainee(id);

}

@Autowired
private JEETraineeRepo gDOA;
@PostMapping("login_jeetrainee")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody JEETraineeModel userData){
	JEETraineeModel user=gDOA.findByEmail(userData.getEmail());
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
