
package com.agency.Service;

import com.agency.Repo.JEEMarksheetRepo;

import com.agency.Model.JEEMarksheetModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JEEMarksheetService {


	@Autowired
	JEEMarksheetRepo jeeld;
	public JEEMarksheetService() {
		
	}
	
	public List<JEEMarksheetModel> getAllLogin(){
		
		return jeeld.findAll();
	}
	
	public void savejeetrainee(JEEMarksheetModel ll3) {
		jeeld.save(ll3);
	}

	public void updatejeetrainee(JEEMarksheetModel ll3) {
		jeeld.save(ll3);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deletejeetrainee(JEEMarksheetModel id) {
		jeeld.delete(id);
		
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
