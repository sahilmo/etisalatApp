package com.etisalat.dao.application;

import java.util.List;

import org.springframework.stereotype.Repository;


import com.etisalat.models.User;


@Repository
public interface IApplicationDao {
	
	// User Entity CRUD
	public List<User> getAllUsers();
	
	public User getUser(int user_code);
	
	public void saveOrUpdateUser(User user);
	
	public void delete(int user_code);
	
	
}
