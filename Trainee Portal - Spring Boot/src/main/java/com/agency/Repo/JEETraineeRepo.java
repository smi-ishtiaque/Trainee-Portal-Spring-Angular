
package com.agency.Repo;

import com.agency.Model.JEETraineeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JEETraineeRepo extends JpaRepository<JEETraineeModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<JEETraineeModel> findById(String email);

	JEETraineeModel findByEmail(String email);

	
}
