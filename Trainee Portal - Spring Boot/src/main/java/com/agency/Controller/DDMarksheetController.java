
package com.agency.Controller;

import com.agency.Model.DDMarksheetModel;
import com.agency.Service.DDMarksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class DDMarksheetController {
@Autowired
DDMarksheetService ldd;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_ddmarksheet")
public List<DDMarksheetModel> get_ddMarksheet() {
	
	return ldd.getAllddMarksheet();

}

//@PostMapping("viewmem")
//public MarksheetModel getStudent(@RequestBody MarksheetModel id) {
//	String id1=id.getEmail();
//	return l.getStudentById(id1);
//}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_ddmarksheet")
public void saveDDM(@RequestBody DDMarksheetModel ll) {
	
	ldd.saveddMarksheet(ll);

}


@PostMapping("update_ddmarksheet")
public void updateDDM(@RequestBody DDMarksheetModel ll) {
	
	ldd.updateddMarksheet(ll);

}

@PostMapping("delete_ddmarksheet")
public void deleteDDM(@RequestBody DDMarksheetModel id) {
	
	ldd.deleteddMarksheet(id);

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
