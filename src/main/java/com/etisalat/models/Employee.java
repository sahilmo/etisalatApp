package com.etisalat.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "EMPLOYEE")
public class Employee {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="employee_id")
    private Integer employee_id;
	
	@Length(min = 2, message = "The First Name must be at least 2 characters")
	@NotNull(message = "First Name may not be null")
    @Column(name ="first_name")
    private String first_name;
	
	@Length(min = 2, message = "The Last Name must be at least 2 characters")
	@NotNull(message = "Last Name may not be null")
    @Column(name= "last_name")
    private String last_name;

	@Email
    @Column(name= "email")
    private String email;
	

    @Column(name= "phone_number")
    private String phone_number;

    @Column(name= "hire_date")
    private Date hire_date;
    
    @Min(value = 0L, message = "Salary must be greater then 0")
    @Column(name= "salary")
    private Integer salary;

    @ManyToOne
    @JoinColumn(name="manager_id",nullable= true)
    private Employee manager;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="department_id",nullable= false)
    private Department department;

    public Employee() {
    	
    }
    
	public Employee(String first_name, String last_name, String email, String phone_number, Date hire_date,
			Integer salary, Employee manager, Department department) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.phone_number = phone_number;
		this.hire_date = hire_date;
		this.salary = salary;
		this.manager = manager;
		this.department = department;
	}

	public Integer getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(Integer employee_id) {
		this.employee_id = employee_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public Date getHire_date() {
		return hire_date;
	}

	public void setHire_date(Date hire_date) {
		this.hire_date = hire_date;
	}

	public Integer getSalary() {
		return salary;
	}

	public void setSalary(Integer salary) {
		this.salary = salary;
	}

	public Employee getManager() {
		return manager;
	}

	public void setManager(Employee manager) {
		this.manager = manager;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "Employee [employee_id=" + employee_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", email=" + email + ", phone_number=" + phone_number + ", hire_date=" + hire_date + ", salary="
				+ salary + ", manager=" + manager + ", department=" + department + "]";
	}
    
}
