
package com.agency.Service;

import com.agency.Repo.JEETraineeRepo;
import com.agency.Model.JEETraineeModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JEETraineeService {


	@Autowired
	JEETraineeRepo ld;
	public JEETraineeService() {
		
	}
	
	public List<JEETraineeModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void savejeeTrainee(JEETraineeModel ll) {
		ld.save(ll);
	}

	public void updatejeeTrainee(JEETraineeModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deletejeeTrainee(JEETraineeModel id) {
		ld.delete(id);
		
	}
	
	public JEETraineeModel getjeeTraineeById(String email) {
		Optional<JEETraineeModel> pm=ld.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(JEETraineeModel ll) {
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
