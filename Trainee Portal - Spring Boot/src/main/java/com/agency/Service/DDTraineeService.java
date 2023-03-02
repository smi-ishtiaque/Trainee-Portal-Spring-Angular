package com.agency.Service;

import com.agency.Repo.DDTraineeRepo;
import com.agency.Model.DDTraineeModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DDTraineeService {


	@Autowired
	DDTraineeRepo ld;
	public DDTraineeService() {
		
	}
	
	public List<DDTraineeModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void saveddTrainee(DDTraineeModel ll) {
		ld.save(ll);
	}

	public void updateddTrainee(DDTraineeModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deleteddTrainee(DDTraineeModel id) {
		ld.delete(id);
		
	}
	
	public DDTraineeModel getddTraineeById(String email) {
		Optional<DDTraineeModel> pm=ld.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(DDTraineeModel ll) {
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
