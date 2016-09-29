package com.brain.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class UtilJDBC {
	//驱动程序
//	private String driverName="oracle.jdbc.driver.OracleDriver";
	static{
		//加载驱动器
		 try {
			//Class.forName("oracle.jdbc.driver.OracleDriver");
			 Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	}
	public static Connection getConnection(){
	 try{  
	   // return DriverManager.getConnection("jdbc:oracle:thin:@120.27.49.78:1521:orcl3118", "jt", "jt123456");  
		return DriverManager.getConnection("jdbc:mysql://115.28.44.238:3306/brian","qf","qf123456");
	 }
	 catch (SQLException e) {
         e.printStackTrace();
         return null;
     } 
	
	}
}
