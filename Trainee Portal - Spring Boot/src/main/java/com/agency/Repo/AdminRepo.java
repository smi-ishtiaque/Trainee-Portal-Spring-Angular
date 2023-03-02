package com.agency.Repo;

import com.agency.Model.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<AdminModel,String>{

    //	public StudentModel findByEmail(String email);

//	public StudentModel findByEmailAndPassword(String email, String password);

    Optional<AdminModel> findById(String email);

    AdminModel findByEmail(String email);
}



