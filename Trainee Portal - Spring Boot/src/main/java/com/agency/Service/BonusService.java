
package com.agency.Service;

import com.agency.Repo.BonusRepo;
import com.agency.Model.BonusModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BonusService {


	@Autowired
	BonusRepo bd;
	public BonusService() {
		
	}
	
	public List<BonusModel> getAllBonus(){
		
		return bd.findAll();
	}
	
	public void saveBonus(BonusModel ll) {
		bd.save(ll);
	}

}
