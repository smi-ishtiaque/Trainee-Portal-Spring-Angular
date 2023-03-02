
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
@Table(name = "nt_marksheet")

public class NTMarksheetModel {
	@Id
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;

	String firstname;
	String lastname;

	String midexam;

	String midevidence;

	String finalexam;

	String finalevidence;

	String totalmarks;

}
