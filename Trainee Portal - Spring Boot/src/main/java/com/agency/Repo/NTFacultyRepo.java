
package com.agency.Repo;

import com.agency.Model.NTFacultyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NTFacultyRepo extends JpaRepository<NTFacultyModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<NTFacultyModel> findById(String email);

	NTFacultyModel findByEmail(String email);

	
}
