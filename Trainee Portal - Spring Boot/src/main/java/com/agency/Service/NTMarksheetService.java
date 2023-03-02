
package com.agency.Service;

import com.agency.Model.NTMarksheetModel;
import com.agency.Repo.NTMarksheetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NTMarksheetService {


	@Autowired
	NTMarksheetRepo ld;
	public NTMarksheetService() {
		
	}
	
	public List<NTMarksheetModel> getAllntMarksheet(){
		
		return ld.findAll();
	}
	
	public void saventMarksheet(NTMarksheetModel ll) {
		ld.save(ll);
	}

	public void updatentMarksheet(NTMarksheetModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deletentMarksheet(NTMarksheetModel id) {
		ld.delete(id);
		
	}
	
//	public StudentModel getStudentById(String email) {
//		Optional<StudentModel> pm=ld.findById(email);
//		if(pm.isPresent()) {
//			//System.out.println(pm.get().getName());
//			return pm.get();
//		}else 
//		return null;
//		 
//	}

//	public void saveUser(StudentModel ll) {
//		// TODO Auto-generated method stub
//		ld.save(ll);
//		
//	}

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
