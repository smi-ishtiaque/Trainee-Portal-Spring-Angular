
package com.agency.Service;

import com.agency.Repo.NTFacultyRepo;
import com.agency.Model.NTFacultyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NTFacultyService {


	@Autowired
	NTFacultyRepo ld;
	public NTFacultyService() {
		
	}
	
	public List<NTFacultyModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void saventFaculty(NTFacultyModel ll) {
		ld.save(ll);
	}

	public void updatentFaculty(NTFacultyModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deletentFaculty(NTFacultyModel id) {
		ld.delete(id);
		
	}
	
	public NTFacultyModel getntFacultyById(String email) {
		Optional<NTFacultyModel> pm=ld.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(NTFacultyModel ll) {
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
