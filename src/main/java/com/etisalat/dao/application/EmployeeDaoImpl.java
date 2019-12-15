package com.etisalat.dao.application;

import java.util.List;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.etisalat.models.Employee;

@Repository
@Transactional(value="myTransactionManager")
@Qualifier("EmpDaoImpl")
public class EmployeeDaoImpl {

	final static Logger LOG = LogManager.getLogger(EmployeeDaoImpl.class);

	@Autowired
	private SessionFactory sessionFactory;

	/*
	 * Employee CRUD started
	 * 
	 * @Author- Sahilmo
	 * 
	 */
	public List<Employee> getAllEmployee() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<Employee> cq = cb.createQuery(Employee.class);
		Root<Employee> root = cq.from(Employee.class);
		cq.select(root);
		Query query = session.createQuery(cq);
		return query.getResultList();
	}

	
	public Employee getEmployee(int eId) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from Employee where employee_id = :eId ");

		try {
			query.setParameter("eId", eId);
			Employee emp = (Employee) query.getSingleResult();
			return emp;
		} catch (Exception e) {
			LOG.error("Exception" + e);
		}
		return null;
	}

	
	public String saveOrUpdateEmp(Employee emp) {
		Session session = sessionFactory.getCurrentSession();
		try {
			session.saveOrUpdate(emp);
			return "success"  ;
		} catch (Exception e) {
			LOG.error("Exception " + e);
			return "error"  ;
		}
		
	}

	
	public String deleteEmp(int eId) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("delete Employee where employee_id = :eId");
		query.setParameter("eId", eId);
		try {
			int result = query.executeUpdate();
			LOG.info("Record Deleted " + result);
			if(result==0) {
				return "No Record found for "+eId;
			}
			return "success"; 
		} catch (Exception e) {
			// TODO: handle exception
			return "error" ;
		}
	
	}
	// Employee crud ended

}
