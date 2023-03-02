
package com.agency.Service;

import com.agency.Repo.SupervisorRepo;
import com.agency.Model.SupervisorModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupervisorService {


	@Autowired
	SupervisorRepo sld;
	public SupervisorService() {
		
	}
	
	public List<SupervisorModel> getAllLogin(){
		
		return sld.findAll();
	}
	
	public void saveSupervisor(SupervisorModel ll) {
		sld.save(ll);
	}

	public void updateSupervisor(SupervisorModel ll1) {
		sld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deleteSupervisor(SupervisorModel id) {
		sld.delete(id);
		
	}
	
	public SupervisorModel getSupervisorById(String email) {
		Optional<SupervisorModel> pm=sld.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(SupervisorModel ll) {
		// TODO Auto-generated method stub
		sld.save(ll);
		
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
