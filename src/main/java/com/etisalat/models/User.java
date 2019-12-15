package com.etisalat.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.etisalat.models.User.UserId;



@Entity
@Table(name="APPS_USERS")
@IdClass(UserId.class)
@Component
public class User implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private String user_id; 
	@Id
	private String user_comp_code;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_code", unique = true, nullable = false, insertable = true, updatable = false)
	private Integer user_code;
	@Column
	private String user_passwd;
	@Column
	private String user_email;
	@Column
	private String user_desc;
	@Column
	private String user_role;
	@Column
	private String user_contact_no;

	public User () {
		
	}
	
	public User(String user_id,String user_comp_code, Integer user_code, String user_passwd,
			String user_email, String user_desc, String user_role, String user_contact_no) {
		super();
		this.user_id = user_id;
		this.user_comp_code = user_comp_code;
		this.user_code = user_code;
		this.user_passwd = user_passwd;
		this.user_email = user_email;
		this.user_desc = user_desc;
		this.user_role = user_role;
		this.user_contact_no = user_contact_no;
	}

	
	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getUser_comp_code() {
		return user_comp_code;
	}

	public void setUser_comp_code(String user_comp_code) {
		this.user_comp_code = user_comp_code;
	}

	public Integer getUser_code() {
		return user_code;
	}

	public void setUser_code(Integer user_code) {
		this.user_code = user_code;
	}

	public String getUser_passwd() {
		return user_passwd;
	}

	public void setUser_passwd(String user_passwd) {
		this.user_passwd = user_passwd;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getUser_desc() {
		return user_desc;
	}

	public void setUser_desc(String user_desc) {
		this.user_desc = user_desc;
	}

	public String getUser_role() {
		return user_role;
	}

	public void setUser_role(String user_role) {
		this.user_role = user_role;
	}

	public String getUser_contact_no() {
		return user_contact_no;
	}

	public void setUser_contact_no(String user_contact_no) {
		this.user_contact_no = user_contact_no;
	}

	@Override
	public String toString() {
		return "User [user_code=" + user_code + ", user_passwd=" + user_passwd + ", user_email=" + user_email + ", user_desc=" + user_desc
				+ ", user_role=" + user_role + ", user_contact_no=" + user_contact_no + "]";
	}
	
	
	
	static class UserId implements Serializable {
		
	
		private String user_comp_code;
		
		private String user_id;
		
		public UserId() {}
		
		public UserId(String user_comp_code, String user_id) {
			super();
			this.user_comp_code = user_comp_code;
			this.user_id = user_id;
		}
		
		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((user_comp_code == null) ? 0 : user_comp_code.hashCode());
			result = prime * result + ((user_id == null) ? 0 : user_id.hashCode());
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			UserId other = (UserId) obj;
			if (user_comp_code == null) {
				if (other.user_comp_code != null)
					return false;
			} else if (!user_comp_code.equals(other.user_comp_code))
				return false;
			if (user_id == null) {
				if (other.user_id != null)
					return false;
			} else if (!user_id.equals(other.user_id))
				return false;
			return true;
		}

		
		
	}
	
}
