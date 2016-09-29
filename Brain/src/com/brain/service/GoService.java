package com.brain.service;

import java.util.ArrayList;

import com.brain.Dao.GoDao;
import com.brain.Pojo.Go;

public class GoService {
	GoDao goDao = new GoDao();

	public boolean saveGoScore(Go go) {
		if(goDao.Insert(go)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return goDao.queryAvg(id);
	}

}
