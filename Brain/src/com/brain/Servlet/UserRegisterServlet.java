package com.brain.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import com.brain.Pojo.User;
import com.brain.service.UserService;

/**
 * Servlet implementation class UserRegisterServlet
 */
@WebServlet("/UserRegisterServlet")
public class UserRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserRegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * 
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * 
	 * 得到的参数中sex为保密，男，女对应,0,1,2
	 * 
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String username = request.getParameter("uname").trim();
		String password = request.getParameter("password").trim();
		String sexString = request.getParameter("sex").trim();
		int sex=1;
		if("男".equals(sexString)){
			sex=1;
		}else if("女".equals(sexString)){
			sex=2;
		}else{//保密
			sex=0;
		}
		int age = Integer.parseInt(request.getParameter("age").trim());
		String telephone = request.getParameter("telephone");
		
		User user = new User(username, telephone, sex, age, password, new Timestamp(System.currentTimeMillis()));
		/**
		 * 前台通过返回对象的code属性判断注册是否成功，1为成功，0为失败；登录同理
		 *
		 */
		JSONObject jsonObject = new JSONObject();
		if(new UserService().saveAdminInfo(user)){
			HttpSession session=request.getSession();
			session.setAttribute("loginuser", user);
			jsonObject.put("code", 1);
		}else{
			jsonObject.put("code", 0);
		}
		PrintWriter out = response.getWriter();
		out.print(jsonObject);
		out.close();
				
	}

}
