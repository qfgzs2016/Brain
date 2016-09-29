package com.brain.service;

import java.util.ArrayList;

import com.brain.Dao.UserDao;
import com.brain.Pojo.User;

public class UserService{
	UserDao userDao = new UserDao();
	
	public boolean saveAdminInfo(User user) {
		// TODO Auto-generated method stub
		if(userDao.Insert(user)){
			return true;
		}
		return false;
	}

	public ArrayList<User> CheckLoginAndUpdateFiallyLogin(User user) {
		// TODO Auto-generated method stub
		ArrayList<User> users = (ArrayList<User>) userDao.checkLogin(user);
		if(users != null && users.size()>0){
			return users;
		}
		return null;
	}
	
	public boolean checkRegister(String username){
		if(userDao.checkRegister(username)){
			return true;
		}
		return false;
	}

}
