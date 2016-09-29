package com.brain.util;

import javax.servlet.ServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.BodyContent;
import javax.servlet.jsp.tagext.BodyTagSupport;

import org.apache.commons.lang.StringUtils;

/**
 * 自定义标签，用于在jsp模板中重写指定的占位内容
 * 
 * 基本原理�?
 *		 将overwrite标签内容部分添加到ServletRequest的attribute属�?�?
 *		 在后续block标签中再通过属�?名读取出来，将其渲染到最终的页面上即�?
 * 
 * @author 逆风之羽
 *
 */
public class OverwriteTag extends BodyTagSupport {
  private static final long serialVersionUID = 5901780136314677968L;
  //模块名的前缀
  public static final String PREFIX = "JspTemplateBlockName_";
  //模块�?
  private String name;
  public int doStartTag() throws JspException {
    // TODO Auto-generated method stub
    return super.doStartTag();
  }
  @Override
  public int doEndTag() throws JspException {
    ServletRequest request = pageContext.getRequest();
    //标签内容
    System.out.println("------------->"+request);
    BodyContent bodyContent = getBodyContent();
    System.out.println(bodyContent);
    request.setAttribute(PREFIX+name,  StringUtils.trim(bodyContent.getString()));		
    System.out.println(request);
    // TODO Auto-generated method stub
    return super.doEndTag();
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }	
}