package com.brain.service;


import com.brain.Dao.MahjongDao;
import com.brain.Pojo.Mahjong;


public class MahjongService {
	MahjongDao mahjongDao = new MahjongDao();
	

	public boolean saveGoScore(Mahjong mahjong) {
		System.out.println("围棋"+mahjongDao.Insert(mahjong));
		if(mahjongDao.Insert(mahjong)){
			return true;
		}
		return false;
	}
	public float getAvg(int id){
		return mahjongDao.queryAvg(id);
	}
}
