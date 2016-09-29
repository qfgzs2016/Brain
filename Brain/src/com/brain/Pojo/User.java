package com.brain.Pojo;

import java.sql.Timestamp;

/**
 * 登陆用户信类
 * @author Watermelon_R
 *
 */

public class User {
	private int id;
	private String name;
	private String tele;
	private int sex;
	private int age;
	private String password;
	private Timestamp createTime;


	public User() {
		super();
	}
	
	public User(String name, String tele, int sex, int age, String password,
			Timestamp createTime) {
		super();
		this.name = name;
		this.tele = tele;
		this.sex = sex;
		this.age = age;
		this.password = password;
		this.createTime = createTime;
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTele() {
		return tele;
	}
	public void setTele(String tele) {
		this.tele = tele;
	}
	public int getSex() {
		return sex;
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Timestamp getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}
	@Override
	public String toString() {
		return "User [userName=" + name + ", tele=" + tele + ", sex=" + sex
				+ ", age=" + age + ", password=" + password + "]";
	}
	
}
