
package com.agency.Repo;

import com.agency.Model.SupervisorModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SupervisorRepo extends JpaRepository<SupervisorModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<SupervisorModel> findById(String email);

	SupervisorModel findByEmail(String email);

	
}
