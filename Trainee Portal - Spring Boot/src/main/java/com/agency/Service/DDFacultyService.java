
package com.agency.Service;

import com.agency.Repo.DDFacultyRepo;
import com.agency.Model.DDFacultyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DDFacultyService {


	@Autowired
	DDFacultyRepo ld;
	public DDFacultyService() {
		
	}
	
	public List<DDFacultyModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void saveddFaculty(DDFacultyModel ll) {
		ld.save(ll);
	}

	public void updateddFaculty(DDFacultyModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deleteddFaculty(DDFacultyModel id) {
		ld.delete(id);
		
	}
	
	public DDFacultyModel getddFacultyById(String email) {
		Optional<DDFacultyModel> pm=ld.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(DDFacultyModel ll) {
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
