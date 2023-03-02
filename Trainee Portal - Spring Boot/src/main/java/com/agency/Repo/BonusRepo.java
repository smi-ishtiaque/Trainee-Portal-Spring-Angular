package com.agency.Repo;

import com.agency.Model.BonusModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BonusRepo extends JpaRepository<BonusModel,Integer>{


	
}
