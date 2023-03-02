
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
@Table(name = "tsp_list")

public class TSPModel {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String tsp;

	String location;

}
