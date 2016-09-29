package com.brain.service;


import com.brain.Dao.MahjongDao;
import com.brain.Pojo.Mahjong;


public class MahjongService {
	MahjongDao mahjongDao = new MahjongDao();
	

	public boolean saveMahjongScore(Mahjong mahjong) {
		if(mahjongDao.Insert(mahjong)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return mahjongDao.queryAvg(id);
	}
}
