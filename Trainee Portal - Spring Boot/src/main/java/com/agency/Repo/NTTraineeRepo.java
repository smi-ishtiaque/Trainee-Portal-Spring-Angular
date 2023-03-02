
package com.agency.Repo;

import com.agency.Model.NTTraineeModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NTTraineeRepo extends JpaRepository<NTTraineeModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<NTTraineeModel> findById(String email);

	NTTraineeModel findByEmail(String email);

	
}
