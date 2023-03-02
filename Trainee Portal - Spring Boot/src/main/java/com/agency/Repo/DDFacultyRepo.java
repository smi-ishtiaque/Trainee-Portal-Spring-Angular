
package com.agency.Repo;

import com.agency.Model.DDFacultyModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DDFacultyRepo extends JpaRepository<DDFacultyModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<DDFacultyModel> findById(String email);

	DDFacultyModel findByEmail(String email);

	
}
