
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
@Table(name = "jee_trainee")

public class JEETraineeModel {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;

	String firstname;
	String lastname;
	String gender;
	String tsp;
	String year;
	String round;
	String mobileno;
	String email;
	String password;
}
