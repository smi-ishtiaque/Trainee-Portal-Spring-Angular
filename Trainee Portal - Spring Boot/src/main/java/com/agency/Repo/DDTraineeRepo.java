package com.agency.Repo;

import com.agency.Model.DDTraineeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface DDTraineeRepo extends JpaRepository<DDTraineeModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<DDTraineeModel> findById(String email);

	DDTraineeModel findByEmail(String email);

	
}
