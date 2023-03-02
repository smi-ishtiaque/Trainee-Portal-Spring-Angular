
package com.agency.Service;

import com.agency.Repo.TSPRepo;
import com.agency.Model.TSPModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TSPService {


	@Autowired
	TSPRepo ld;
	public TSPService() {
		
	}
	
	public List<TSPModel> getAllTsp(){
		
		return ld.findAll();
	}
	
	public void saveTsp(TSPModel ll) {
		ld.save(ll);
	}

	public void updateTsp(TSPModel ll1) {
		ld.save(ll1);
		
	}

	public void deleteTsp(TSPModel id) {
		ld.delete(id);
		
	}
	
}
