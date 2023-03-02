
package com.agency.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

@Table(name = "bonus")

public class BonusModel {
	@Id 
	int id;
	String firstname;
	String lastname;
	String tsp;
	String year;
	String round;
	String mobileno;
	String date;
	String pmode;
	String accno;
	String bonus;

	
}
