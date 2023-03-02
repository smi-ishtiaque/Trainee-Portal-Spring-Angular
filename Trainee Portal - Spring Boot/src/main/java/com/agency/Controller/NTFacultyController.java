
package com.agency.Controller;

import com.agency.Repo.NTFacultyRepo;
import com.agency.Model.NTFacultyModel;
import com.agency.Service.NTFacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class NTFacultyController {
@Autowired
NTFacultyService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_ntfaculty")
public List<NTFacultyModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("viewntf")
public NTFacultyModel getStudent(@RequestBody NTFacultyModel id) {
	String id1=id.getEmail();
	return l.getntFacultyById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_ntfaculty")
public void saveL(@RequestBody NTFacultyModel ll) {
	
	l.saventFaculty(ll);

}


@PostMapping("update_ntfaculty")
public void updateL(@RequestBody NTFacultyModel ll) {
	
	l.updatentFaculty(ll);

}

@PostMapping("delete_ntfaculty")
public void deleteL(@RequestBody NTFacultyModel id) {
	
	l.deletentFaculty(id);

}

@Autowired
private NTFacultyRepo gDOA;
@PostMapping("login_ntfaculty")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody NTFacultyModel facultyData){
	NTFacultyModel faculty=gDOA.findByEmail(facultyData.getEmail());
	System.out.println(faculty);
	if(faculty.getPassword().equals(facultyData.getPassword()))
		return ResponseEntity.ok(faculty);
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
