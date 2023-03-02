
package com.agency.Repo;

import com.agency.Model.JEEFacultyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JEEFacultyRepo extends JpaRepository<JEEFacultyModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<JEEFacultyModel> findById(String email);

	JEEFacultyModel findByEmail(String email);

	
}
