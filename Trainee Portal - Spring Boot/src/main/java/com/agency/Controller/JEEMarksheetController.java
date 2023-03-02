
package com.agency.Controller;



import com.agency.Model.JEEMarksheetModel;
import com.agency.Service.JEEMarksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JEEMarksheetController {
@Autowired
JEEMarksheetService jl;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_jeemarksheet")
public List<JEEMarksheetModel> getLogin() {
	
	return jl.getAllLogin();

}

//@PostMapping("viewmem")
//public MarksheetModel getStudent(@RequestBody MarksheetModel id) {
//	String id1=id.getEmail();
//	return l.getStudentById(id1);
//}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_jeemarksheet")
public void saveJl(@RequestBody JEEMarksheetModel ll) {
	
	jl.savejeetrainee(ll);

}


@PostMapping("update_jeemarksheet")
public void updateJl(@RequestBody JEEMarksheetModel ll) {
	
	jl.updatejeetrainee(ll);

}

@PostMapping("delete_jeemarksheet")
public void deleteJl(@RequestBody JEEMarksheetModel id) {
	
	jl.deletejeetrainee(id);

}

//@Autowired
//private StudentDAO gDOA;
//@PostMapping("loginstudent")
//@CrossOrigin(origins="http://localhost:4200")
//public ResponseEntity<?>loginUser(@RequestBody StudentModel userData){
//	StudentModel user=gDOA.findByEmail(userData.getEmail());
//	System.out.println(user);
//	if(user.getPassword().equals(userData.getPassword()))
//		return ResponseEntity.ok(user);
//		return (ResponseEntity<?>) ResponseEntity.internalServerError();
//	}
//	



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
