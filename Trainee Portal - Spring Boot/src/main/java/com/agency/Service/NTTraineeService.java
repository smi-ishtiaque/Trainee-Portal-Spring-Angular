package com.agency.Service;

import com.agency.Repo.NTTraineeRepo;
import com.agency.Model.NTTraineeModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NTTraineeService {


	@Autowired
	NTTraineeRepo ld;
	public NTTraineeService() {
		
	}
	
	public List<NTTraineeModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void saventTrainee(NTTraineeModel ll) {
		ld.save(ll);
	}

	public void updatentTrainee(NTTraineeModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deletentTrainee(NTTraineeModel id) {
		ld.delete(id);
		
	}
	
	public NTTraineeModel getntTraineeById(String email) {
		Optional<NTTraineeModel> pm=ld.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(NTTraineeModel ll) {
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
