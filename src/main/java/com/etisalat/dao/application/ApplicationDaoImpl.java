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

import com.etisalat.models.User;

@Repository
@Transactional(value="myTransactionManager")
@Qualifier("AppDaoImpl")
public class ApplicationDaoImpl implements IApplicationDao {

	final static Logger LOG = LogManager.getLogger(ApplicationDaoImpl.class);

	@Autowired
	private SessionFactory sessionFactory;

	/*
	 * Apps User CRUD started
	 * 
	 * @Author- Sahilmo
	 * 
	 */
	@Override
	public List<User> getAllUsers() {

		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<User> cq = cb.createQuery(User.class);
		Root<User> root = cq.from(User.class);
		cq.select(root);
		Query query = session.createQuery(cq);
		return query.getResultList();
	}

	@Override
	public User getUser(int user_code) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("from User where user_code = :user_code ");

		try {
			query.setParameter("user_code", user_code);
			User user = (User) query.getSingleResult();
			return user;
		} catch (Exception e) {
			LOG.error("Exception" + e);
		}
		return null;
	}

	@Override
	public void saveOrUpdateUser(User user) {
		LOG.info("save user code" , user.getUser_code());
		Session session = sessionFactory.getCurrentSession();
		try {
			session.saveOrUpdate(user);
		} catch (Exception e) {
			LOG.error("Exception " + e);
		}
	}

	@Override
	public void delete(int user_code) {
		Session session = sessionFactory.getCurrentSession();
		Query query = session.createQuery("delete User where user_code = :user_code");
		query.setParameter("user_code", user_code);
		int result = query.executeUpdate();
		LOG.info("Record Deleted " + result);
	}
	// user crud ended

}
