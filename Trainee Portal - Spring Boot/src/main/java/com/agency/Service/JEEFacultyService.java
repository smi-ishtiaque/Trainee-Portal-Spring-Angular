
package com.agency.Service;

import com.agency.Repo.JEEFacultyRepo;
import com.agency.Model.JEEFacultyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JEEFacultyService {


	@Autowired
	JEEFacultyRepo ld;
	public JEEFacultyService() {
		
	}
	
	public List<JEEFacultyModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void savejeeFaculty(JEEFacultyModel ll) {
		ld.save(ll);
	}

	public void updatejeeFaculty(JEEFacultyModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deletejeeFaculty(JEEFacultyModel id) {
		ld.delete(id);
		
	}
	
	public JEEFacultyModel getjeeFacultyById(String email) {
		Optional<JEEFacultyModel> pm=ld.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(JEEFacultyModel ll) {
		// TODO Auto-generated method stub
		ld.save(ll);
		
	}

//	public StudentModel fetchUserByEmail(String email) {
//		// TODO Auto-generated method stub
//		return ld.findByEmail(email);
//	}	
//	
//	public StudentModel fetchUserByEmailAndPassword(String email,String password) {
//		// TODO Auto-generated method stub
//		return ld.findByEmailAndPassword(email,password);
//	}

}
