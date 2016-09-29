package com.brain.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.brain.Pojo.Go;
import com.brain.util.UtilJDBC;



public class GoDao implements DAO<Go>{
	Connection con = (Connection) UtilJDBC.getConnection();
	PreparedStatement sql=null; 
	ResultSet rs = null;
	
	/**
	 * 前台插入一条围棋记录
	 * @param go
	 * @return
	 */
	@Override
	public boolean Insert(Go go) {
		try {
			//String sqlString="INSERT INTO t_game_go(user_id,score,createTime,createTimeDate) VALUES(3,800,'2016-9-28 00:00:00',DATE_FORMAT(NOW(),'%Y-%c-%d'))";
			sql = con.prepareStatement("INSERT INTO t_game_go(user_id,score,createTime,createTimeDate) VALUES(?,?,?,DATE_FORMAT(NOW(),'%Y-%c-%d'))");
			sql.setInt(1, go.getId());
			sql.setInt(2, go.getScore());
			sql.setTimestamp(3, new Timestamp(System.currentTimeMillis()));
			int num=sql.executeUpdate();
			System.out.println("围棋2"+num);
			if(num>0){
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		return false;
	}
		
	
	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(int id, Go t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Go> query(String strWhere, String orderby, int pageSize,
			int pageIndex) {
				return null;
	}


	@Override
	public float queryAvg(int id) {
		
		try {
			sql=con.prepareStatement("select avg(score) avg from t_game_go where user_id=? and createTimeDate=DATE_FORMAT(NOW(),'%Y-%c-%d') group by createTimeDate");
			sql.setInt(1, id);
			rs=sql.executeQuery();
			if(rs.next()){
				return rs.getFloat("avg");
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return 0;
	}
	
}
