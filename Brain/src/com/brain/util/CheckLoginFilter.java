package com.brain.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;




import com.brain.Pojo.User;




/**
 * 实现登入控制
 * @author cs
 * @version1.0
 *
 */
public class CheckLoginFilter implements Filter { 
	 
	 protected FilterConfig filterConfig = null; 
	 private String redirectURL = null; 
	 private List notCheckURLList = new ArrayList();  
	 private String sessionKey = null;
	 
	 /**
	  * 
	  * @param servletRequest
	  * @param servletResponse
	  * 
	  */
	 public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException 
	 { 
	  HttpServletRequest request = (HttpServletRequest) servletRequest; 
	  HttpServletResponse response = (HttpServletResponse) servletResponse;

	  HttpSession session = request.getSession(); 
	  User admin=(User)session.getAttribute(sessionKey);
	  if(sessionKey==null) 
	  { 
	   filterChain.doFilter(request, response); 
	   return; 
	  } 
	  if((!checkRequestURIIntNotFilterList(request)) && (admin == null)) 
	  { 
	   response.sendRedirect(request.getContextPath() + redirectURL); 
	   return; 
	  } 
	  filterChain.doFilter(servletRequest, servletResponse); 
	 }
	 
	 /**
	  * 注销
	  */
	 public void destroy() 
	 { 
	  notCheckURLList.clear(); 
	 }

	 private boolean checkRequestURIIntNotFilterList(HttpServletRequest request) 
	 { 
	  String uri = request.getServletPath() + (request.getPathInfo() == null ? "" : request.getPathInfo()); 
	  return notCheckURLList.contains(uri); 
	 }

	 /**
	  * 初始化最先调用
	  * 
	  */
	 public void init(FilterConfig filterConfig) throws ServletException 
	 { 
	  this.filterConfig = filterConfig; 
	  redirectURL = filterConfig.getInitParameter("redirectURL"); //获得重定向地址
	  sessionKey = filterConfig.getInitParameter("checkSessionKey");//获得关键字

	  String notCheckURLListStr = filterConfig.getInitParameter("notCheckURLList");

	  if(notCheckURLListStr != null) 
	  { 
	   StringTokenizer st = new StringTokenizer(notCheckURLListStr, ";"); //通过;进行分割
	   notCheckURLList.clear(); 
	   while(st.hasMoreTokens()) 
	   { 
	    notCheckURLList.add(st.nextToken());//存入列表
	   } 
	  } 
	} 
}
