package com.etisalat.controller.application;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.etisalat.dao.application.EmployeeDaoImpl;
import com.etisalat.dao.application.IApplicationDao;
import com.etisalat.models.Employee;
import com.etisalat.models.User;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class ApplicaitonController {
	final static Logger LOG = LogManager.getLogger(ApplicaitonController.class);
	
	@Autowired
	IApplicationDao appDao;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	User user;
	
	@Autowired
	Employee emp;
	
	@Autowired
	EmployeeDaoImpl empDAO;
	
	@RequestMapping(value =  "/", method = RequestMethod.GET)
	public String start() {		
		return "application";
	}
		
	/*
	 * Add new user of the apps_users table 
	 * */	
	@RequestMapping(value = "/newUser", method = RequestMethod.GET)
	public String appUserAdd(ModelMap model) {
		//System.out.println(getFakeEmp());
		List<User> users = appDao.getAllUsers();
		LOG.info("getAllUsers", users);
		model.put("userList", users);
		return "application/appUserAdd";
	}
	
	/*
	 * Save OR Update user
	 * */
	@RequestMapping(value = "/saveOrUpdateUser", method = RequestMethod.POST)
	public ModelAndView saveOrUpdateUser(@ModelAttribute User user) {
		appDao.saveOrUpdateUser(user);
		return new ModelAndView("redirect:/newUser");
	}
	
	/*
	 * Edit User 
	 * */
	@RequestMapping(value = "/editUser",method = RequestMethod.GET)
	@ResponseBody
	public User editContact(HttpServletRequest request) {
		
		int user_code = Integer.parseInt(request.getParameter("user_code"));
		LOG.info("user_code",user_code);
		User user = appDao.getUser(user_code);
		return user;
	}
	
	/*
	 * Delete User 
	 * */
	@RequestMapping(value = "/deleteUser/{user_code}",
			produces = "application/json",
			method = RequestMethod.DELETE
			)
	public @ResponseBody String deleteContact(@PathVariable Integer user_code) {
	    LOG.info("delete user_code "+ user_code);
	    appDao.delete(user_code);
	    return "{\"msg\":\"success\"}";
	    //return user_code;
	}
		
	  @RequestMapping(value = "/getTime", method = RequestMethod.GET)
	    public @ResponseBody String getTime() {
		  SimpleDateFormat formatDate = new SimpleDateFormat("EEE, d MMM yyyy HH:mm aa");
		  String formattedDate = formatDate.format(new Date()); // Sample date to be formatted
	        String result = "Today is <b>" + formattedDate + "</b>";
	        return result;
	    }
	    
	  @RequestMapping(value = "/getFakeEmp",
			  produces = "application/json",
			  method = RequestMethod.GET)
	  public @ResponseBody String getFakeEmp() {
		String str = restTemplate.getForObject("https://randomuser.me/api/", String.class);

		try {

			// Object mapper to map JSON string in JsonNode
			ObjectMapper mapper = new ObjectMapper();
			JsonNode fakeUser = mapper.readTree(str);
			user.setUser_code((int)(Math.random()*9000)+1000);
			user.setUser_id(fakeUser.get("results").get(0).get("login").get("username").asText("username"));
			user.setUser_comp_code("011");
			user.setUser_passwd(fakeUser.get("results").get(0).get("login").get("password").asText("password"));
			user.setUser_email(fakeUser.get("results").get(0).get("email").asText("email"));
			user.setUser_desc(fakeUser.get("results").get(0).get("name").get("first").asText("first")+" "+fakeUser.get("results").get(0).get("name").get("last").asText("last"));
			user.setUser_role("User");
			user.setUser_contact_no(fakeUser.get("results").get(0).get("phone").asText("phone"));
			System.out.println("User "+ user.toString());
			
			//save dummy user
			appDao.saveOrUpdateUser(user);
			
			return "{\"msg\":\"success\"}";
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Error";
		}
		
	  }
	   		
	 
}
