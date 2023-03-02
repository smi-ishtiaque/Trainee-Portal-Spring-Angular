package com.agency.Controller;

import com.agency.Repo.DDFacultyRepo;
import com.agency.Model.DDFacultyModel;
import com.agency.Service.DDFacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class DDFacultyController {
@Autowired
DDFacultyService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_ddfaculty")
public List<DDFacultyModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("viewddf")
public DDFacultyModel getStudent(@RequestBody DDFacultyModel id) {
	String id1=id.getEmail();
	return l.getddFacultyById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_ddfaculty")
public void saveL(@RequestBody DDFacultyModel ll) {
	
	l.saveddFaculty(ll);

}


@PostMapping("update_ddfaculty")
public void updateL(@RequestBody DDFacultyModel ll) {
	
	l.updateddFaculty(ll);

}

@PostMapping("delete_ddfaculty")
public void deleteL(@RequestBody DDFacultyModel id) {
	
	l.deleteddFaculty(id);

}

@Autowired
private DDFacultyRepo gDOA;
@PostMapping("login_ddfaculty")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody DDFacultyModel facultyData){
	DDFacultyModel faculty=gDOA.findByEmail(facultyData.getEmail());
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
