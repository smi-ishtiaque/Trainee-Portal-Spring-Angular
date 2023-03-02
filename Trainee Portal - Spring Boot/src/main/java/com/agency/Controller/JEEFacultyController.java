
package com.agency.Controller;

import com.agency.Repo.JEEFacultyRepo;
import com.agency.Model.JEEFacultyModel;
import com.agency.Service.JEEFacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JEEFacultyController {
@Autowired
JEEFacultyService lj;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_jeefaculty")
public List<JEEFacultyModel> getLogin() {
	
	return lj.getAllLogin();

}

@PostMapping("viewjeef")
public JEEFacultyModel getjeeFaculty(@RequestBody JEEFacultyModel id) {
	String id1=id.getEmail();
	return lj.getjeeFacultyById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_jeefaculty")
public void saveL(@RequestBody JEEFacultyModel ll) {
	
	lj.savejeeFaculty(ll);

}


@PostMapping("update_jeefaculty")
public void updateL(@RequestBody JEEFacultyModel ll) {
	
	lj.updatejeeFaculty(ll);

}

@PostMapping("delete_jeefaculty")
public void deleteL(@RequestBody JEEFacultyModel id) {
	
	lj.deletejeeFaculty(id);

}

@Autowired
private JEEFacultyRepo gDOA;
@PostMapping("login_jeefaculty")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody JEEFacultyModel facultyData){
	JEEFacultyModel faculty=gDOA.findByEmail(facultyData.getEmail());
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
