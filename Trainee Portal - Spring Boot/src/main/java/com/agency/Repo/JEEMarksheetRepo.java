
package com.agency.Repo;


import com.agency.Model.JEEMarksheetModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JEEMarksheetRepo extends JpaRepository<JEEMarksheetModel,Integer>{


}
