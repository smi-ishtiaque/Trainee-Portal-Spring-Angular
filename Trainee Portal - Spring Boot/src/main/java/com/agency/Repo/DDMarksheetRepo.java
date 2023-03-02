
package com.agency.Repo;

import com.agency.Model.DDMarksheetModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DDMarksheetRepo extends JpaRepository<DDMarksheetModel,Integer>{


}
