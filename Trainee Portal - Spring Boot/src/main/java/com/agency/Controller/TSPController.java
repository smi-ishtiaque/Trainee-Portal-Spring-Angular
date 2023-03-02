
package com.agency.Controller;

import com.agency.Model.TSPModel;
import com.agency.Service.TSPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TSPController {
@Autowired
TSPService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_tsp")
public List<TSPModel> getTsp() {
	
	return l.getAllTsp();

}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_tsp")
public void saveL(@RequestBody TSPModel ll) {
	
	l.saveTsp(ll);

}


@PostMapping("update_tsp")
public void updateL(@RequestBody TSPModel ll) {
	
	l.updateTsp(ll);

}

@PostMapping("delete_tsp")
public void deleteL(@RequestBody TSPModel id) {
	
	l.deleteTsp(id);

}

}
