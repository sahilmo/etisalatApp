package com.etisalat.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "DEPARTMENT")
public class Department {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "department_id")
	private Integer department_id;

	@Column(name = "department_name")
	private String department_name;

	@ManyToOne
	@JoinColumn(name = "manager_id", nullable = true)
	private Employee emp;

	public Department() {
	}

	public Department(Integer department_id, String department_name, Employee emp) {
		super();
		this.department_id = department_id;
		this.department_name = department_name;
		this.emp = emp;
	}

	public Integer getDepartment_id() {
		return department_id;
	}

	public void setDepartment_id(Integer department_id) {
		this.department_id = department_id;
	}

	public String getDepartment_name() {
		return department_name;
	}

	public void setDepartment_name(String department_name) {
		this.department_name = department_name;
	}

	public Employee getEmp() {
		return emp;
	}

	public void setEmp(Employee emp) {
		this.emp = emp;
	}

	@Override
	public String toString() {
		return "Department [department_id=" + department_id + ", department_name=" + department_name + ", emp=" + emp
				+ "]";
	}

}
