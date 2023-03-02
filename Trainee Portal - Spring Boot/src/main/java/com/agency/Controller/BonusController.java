
package com.agency.Controller;

import com.agency.Model.BonusModel;
import com.agency.Service.BonusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BonusController {
@Autowired
BonusService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("view_bonus")
public List<BonusModel> getBonus() {
	
	return l.getAllBonus();

}

//@PostMapping("view")
//public FeesModel getStudent(@RequestBody FeesModel id) {
//	String id1=id.getEmail();
//	return l.getStudentById(id1);
//}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("add_bonus")
public void saveL(@RequestBody BonusModel ll) {
	
	l.saveBonus(ll);

}


}
