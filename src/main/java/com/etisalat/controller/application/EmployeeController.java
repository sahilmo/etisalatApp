package com.etisalat.controller.application;

import java.util.List;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import com.etisalat.dao.application.EmployeeDaoImpl;
import com.etisalat.models.Employee;

@Controller
public class EmployeeController {
	final static Logger LOG = LogManager.getLogger(EmployeeController.class);

	@Autowired
	EmployeeDaoImpl empDAO;

	@Autowired
	RestTemplate restTemplate;

	@Autowired
	Employee emp;

	@RequestMapping(value = "/employee", method = RequestMethod.GET)
	public String start() {
		return "application/employee";
	}

	/*
	 * get all Employee
	 */
	@RequestMapping(value = "/getAllEmp",produces = "application/json", method = RequestMethod.GET)
	public @ResponseBody List<Employee> getAllemployees() {
		return empDAO.getAllEmployee();
	}

	/*
	 * Save OR Update Employee
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(
			value = "/saveOrUpdateEmp",
			consumes="application/json",
			method = RequestMethod.POST,
			produces = "application/json",
			headers = "content-type=application/json")
	public  ResponseEntity<?> saveOrUpdateEmp(@Valid @RequestBody Employee emp, Errors errors) {
		
		// validation
		if (errors.hasErrors()) {
			return new ResponseEntity(errors.getAllErrors(), HttpStatus.BAD_REQUEST);
		}
//		LOG.info("Emp " + emp.toString());
		return new ResponseEntity(empDAO.saveOrUpdateEmp(emp), HttpStatus.OK);
	}

	/*
	 * Edit Employee
	 */
	@RequestMapping(value = "/getEmp/{eId}", produces = "application/json", method = RequestMethod.GET)
	public ResponseEntity<?> editContact(@PathVariable int eId) {
		Employee emp = empDAO.getEmployee(eId);
		if (emp == null) {
			return new ResponseEntity<String>("No Employee found for ID " + eId, HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<Employee>(emp, HttpStatus.OK);
	}

	/*
	 * Delete Emp
	 */
	@RequestMapping(value = "/deleteEmp/{eId}", produces = "application/json", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteEmp(@PathVariable Integer eId) {
		LOG.info("delete emp id " + eId);

		if (eId == 0) {
			return new ResponseEntity<String>("Employee id cant be 0  " + eId, HttpStatus.NOT_ACCEPTABLE);
		}
		if (empDAO.deleteEmp(eId).equals("success")) {

			return new ResponseEntity<Object>("Employee Deleted" + eId, HttpStatus.OK);
		}
		if (empDAO.deleteEmp(eId).equals("error")) {
			return new ResponseEntity<String>("Something went wrong " + eId, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<Object>("Employee Not Found" + eId, HttpStatus.NO_CONTENT);
		}

	}

}
