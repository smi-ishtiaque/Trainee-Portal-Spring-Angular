
package com.agency.Controller;

import com.agency.Repo.NTTraineeRepo;
import com.agency.Model.NTTraineeModel;
import com.agency.Service.NTTraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class NTTraineeController {
@Autowired
NTTraineeService lnt;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_nttrainee")
public List<NTTraineeModel> getLogin() {
	
	return lnt.getAllLogin();

}

@PostMapping("viewnt")
public NTTraineeModel getntTrainee(@RequestBody NTTraineeModel id) {
	String id1=id.getEmail();
	return lnt.getntTraineeById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_nttrainee")
public void saveL(@RequestBody NTTraineeModel ll) {
	
	lnt.saventTrainee(ll);

}


@PostMapping("update_nttrainee")
public void updateL(@RequestBody NTTraineeModel ll) {
	
	lnt.updatentTrainee(ll);

}

@PostMapping("delete_nttrainee")
public void deleteL(@RequestBody NTTraineeModel id) {
	
	lnt.deletentTrainee(id);

}

@Autowired
private NTTraineeRepo gDOA;
@PostMapping("login_nttrainee")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody NTTraineeModel userData){
	NTTraineeModel user=gDOA.findByEmail(userData.getEmail());
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
