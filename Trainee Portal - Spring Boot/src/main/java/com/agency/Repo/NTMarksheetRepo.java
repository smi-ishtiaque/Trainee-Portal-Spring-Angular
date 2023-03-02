
package com.agency.Repo;


import com.agency.Model.NTMarksheetModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NTMarksheetRepo extends JpaRepository<NTMarksheetModel,Integer>{


}
