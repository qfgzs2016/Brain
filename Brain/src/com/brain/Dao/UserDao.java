package com.brain.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


import com.brain.Pojo.User;
import com.brain.util.UtilJDBC;

public class UserDao implements DAO<User> {
	Connection con = (Connection) UtilJDBC.getConnection();
	PreparedStatement sql=null; 
	ResultSet rs = null;
	
	/**
	 *功能:在用户信息表内插入一条注册数据(用户名不能重复)
	 * @param admin
	 * @return 
	 */
	
	@Override
	public boolean Insert(User user) {
		// TODO Auto-generated method stub
			boolean flag = false;
			// TODO Auto-generated method stub
			 try{
					con=UtilJDBC.getConnection();//连接数据	
					sql=con.prepareStatement("select count(user_id) from  t_user_info where username='"+user.getName()+"'");
					rs=sql.executeQuery();
					if(rs.next()){
						int num = rs.getInt(1);
						if(num>0){                                //如果>0说明数据库中已存在
							flag = false;
						}
						else {
							//System.out.println(user);
							if("".equals( user.getPassword())){
								flag = true;    
							}
						/*	if(user.getUpassword().equals("")){
								           flag=true;        //
							}*/
							
							/**
							 * 修改sql
							 */
							else{
								sql=con.prepareStatement("insert into t_user_info(username,password,tel,sex,age,createTime) values(?,?,?,?,?,?)");
							    sql.setString(1, user.getName());
						        sql.setString(2, user.getPassword());
						        sql.setString(3, user.getTele());
						        int sex = user.getSex();
						        if("保密".equals(sex)){
						        	sql.setInt(4, 0);
						        }else if("男".equals(sex)){
						        	sql.setInt(4, 1);
						        }else{
						        	sql.setInt(4, 2);
						        }
						        
						        sql.setInt(5,user.getAge());
						        sql.setTimestamp(6, user.getCreateTime());
						        if(sql.executeUpdate()>0){
						        	flag=true;
						        }//执行！
						        else {
									flag = false;
								}
							}
						}
					}
				   
				}catch(SQLException E){
					E.printStackTrace();
					flag=false;
				}finally
			       {    
			           if(sql!= null)
						try {
							sql.close();
						} catch (SQLException e) {
							e.printStackTrace();
						} 
			           if(con != null)
						try {
							con.close();
						} catch (SQLException e) {
							e.printStackTrace();
						} 
			       } 
				return flag;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(int id, User t) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<User> query(String strWhere, String orderby, int pageSize,
			int pageIndex) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	 /************************
     * 检查用户登录
     * @param admin
     * @return  
     *************************/
    public List<User> checkLogin(User user)
    {
    		List<User> login = new ArrayList<User>();
		    try{
		    	con=UtilJDBC.getConnection();
		    	 sql = con.prepareStatement("SELECT * FROM t_user_info WHERE username=? and password=?");	 
		    	 sql.setString(1, user.getName());
		    	 sql.setString(2, user.getPassword());
		    	 rs = sql.executeQuery();
		    	 User loginer; 
		    	 while(rs.next()){
		    		 loginer = new User();
		    		 loginer.setId(rs.getInt("user_id"));
		    		 loginer.setName(rs.getString("username"));
		    		 loginer.setPassword(rs.getString("password"));
		    		 loginer.setAge(rs.getInt("age"));
		    		 int sex = rs.getInt("sex");
		    		 loginer.setSex(sex);
		    		 loginer.setTele(rs.getString("tel"));
		    		 login.add(loginer);
		    	 }
		    }catch (Exception e) { 
		    	e.printStackTrace();
			}finally
		       {    
		           if(sql!= null)
					try {
						sql.close();
					} catch (SQLException e) {
						e.printStackTrace();
					} 
		           if(con != null)
					try {
						con.close();
					} catch (SQLException e) {
						e.printStackTrace();
					} 
		       } 
		    System.out.println(login);
			return login;
    }
    
    /**
     * 检查用户名是否被注册
     * @param username
     * @return
     * @throws SQLException
     */
    
    public boolean checkRegister(String username){
    	
    	con = UtilJDBC.getConnection();
        try {
			sql = con.prepareStatement("select * from t_user_info where username = ?");
			  sql.setString(1,username);
		        rs=sql.executeQuery();
		        if(rs.next()){
		        	System.out.println("有");
		        	return false;
		        }
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
      
        
		return true;
    }

	@Override
	public float queryAvg(int id) {
		// TODO Auto-generated method stub
		return 0;
	}
    
}
