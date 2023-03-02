
package com.agency.Controller;

import com.agency.Model.NTMarksheetModel;
import com.agency.Service.NTMarksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class NTMarksheetController {
@Autowired
NTMarksheetService nmt;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_ntmarksheet")
public List<NTMarksheetModel> getntMarksheet() {
	
	return nmt.getAllntMarksheet();

}

//@PostMapping("viewmem")
//public MarksheetModel getStudent(@RequestBody MarksheetModel id) {
//	String id1=id.getEmail();
//	return l.getStudentById(id1);
//}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_ntmarksheet")
public void saventMarksheet(@RequestBody NTMarksheetModel ll) {
	
	nmt.saventMarksheet(ll);

}


@PostMapping("update_ntmarksheet")
public void updatentMarksheet(@RequestBody NTMarksheetModel ll) {
	
	nmt.updatentMarksheet(ll);

}

@PostMapping("delete_ntmarksheet")
public void deletentMarksheet(@RequestBody NTMarksheetModel id) {

	nmt.deletentMarksheet(id);

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
