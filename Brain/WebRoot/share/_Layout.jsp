<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="Mytag" prefix="Layout"%>
<Layout:block name="import"></Layout:block>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title><Layout:block name="title"></Layout:block></title>
   
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	 <link rel="stylesheet" href="./css/font-awesome.min.css">
    <link href="./css/application.css" media="all" type="text/css" rel="stylesheet">
    <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
	<Layout:block name="Mycss"></Layout:block>
  </head>
  
  <body>
   <div class="navbar">
    <div class="navbar-inner navbar-fixed-top navbar-shadow">
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </a>
        <div class="collapse nav-collapse">
            <a href="/" class="home-link"><img src="img/logo-small.png" alt="脑力"/></a>
            <ul class="nav pull-left">
                                <li>
                    <a href=""
                                                >今日课程</a>
                </li>
                                <li>
                    <a href="index.html"
                                                    class="active"
                                                >脑力游戏</a>
                </li>
                                <li>
                    <a href=""
                                                >大脑档案</a>
                </li>
                                <li>
                    <a href=""
                                                >打卡日记</a>
                </li>
                                <li>
                    <a href=""
                                                >游戏排行榜</a>
                </li>
                            </ul>

            <ul class=" pull-right  span4 ">
                    
                    <div class="rightnav">
                      <!--   <a href="#help" class="header-item" data-toggle="modal" data-target="#modal-help-form">
                            <span class="icon help-icon"></span><span class="hidden">帮助</span></a> -->
                        <a href="#signin" data-toggle="modal" class="button gray" data-target="#modal-signin-form">登陆</a>
                        <a class="button-green button" href="Register.jsp">注册</a>
                    </div>
                
            </ul>

        </div>
    </div>
</div>
<script type="text/javascript">
    $(function(){
        $('.notifications-background').click(function(){
           if($('#notification-count').html()>0){
               $.post("notifications/clean").done(function(){
                  $('#notification-count').addClass('hidden').html(0);
               });
           }
        });
            });
</script>
<div class="container">
    <div class="modal fade hide" id="modal-signin-form">
        <div class="modal-header" >
            <a class="modal-close cancel-modal" href="#" data-dismiss="modal"><span class="icon close-icon"></span></a>
            <h3>登陆</h3>
        </div>
         <form method="POST" action="" accept-charset="UTF-8">
	          <div class="modal-body">
	            <fieldset>
	                <div class="control-group">
	                    <input id="username" placeholder="用户名" type="text" name="username"> 
	                    <p class="warning" id="uwarning"></p> 
	                </div>
	            </fieldset>
	            <fieldset>
	                <div class="control-group">
	                    <input id="passwords" placeholder="密码" type="password" name="passwords">
	                </div>
	            </fieldset>
	          
	          </div>
	        <div class="modal-footer">
	            <div class="control-group">
	                <div class="normal-login">
	               		 <a id ="login" class="button button-green pull-left">登录</a>
	                </div>
	                <div class="third-login"></div>
	            </div>
	        </div>
        </form>
   </div>
</div>

<!-- <div class="content">
<div class="container main">
<div class="row"> -->
<div class="primary-heading lined">
    <h1>脑力游戏</h1>
</div>
<div class="span3">
    <ul class="filter-nav spanoffset">
        <li class="featurette" data-featurette="topic-tabs" id="featurette-2">
            <span>游戏列表</span>
            <ul>
                <li>
                    <a href="index.html"
                                                   class="selected"
                                           >
                        <span class="filter-name">所有游戏</span>
                    </a>
                </li>
                                <li>
                    <a href=""
                                        >
                        <span class="filter-name">记忆力游戏</span>
                    </a>
                </li>
                                <li>
                    <a href=""
                                        >
                        <span class="filter-name">注意力游戏</span>
                    </a>
                </li>
                                <li>
                    <a href=""
                                        >
                        <span class="filter-name">认知速度游戏</span>
                    </a>
                </li>
                                <li>
                    <a href=""
                                        >
                        <span class="filter-name">灵活性游戏</span>
                    </a>
                </li>
                                <li>
                    <a href=""
                                        >
                        <span class="filter-name">问题解决能力游戏</span>
                    </a>
                </li>
                            </ul>
    </ul>

</div>
 <Layout:block name="MyContent"></Layout:block>
 <script type="text/javascript" src="./js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="./js/jquery-ui-1.10.3.min.js"></script>
<script type="text/javascript" src="./js/jquery.placeholder.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/jquery.icheck.min.js"></script>
<script src="./js/application.js"></script>
<script type="text/javascript" src="./js/swfobject.js"></script>
<script type="text/javascript" src="./js/highcharts.js"></script>
<script type="text/javascript" src="./js/highcharts-more.js"></script>
<script type="text/javascript" src="js/LoginJs.js"></script>
<Layout:block name="MyScript"></Layout:block>
</body>
</html>
