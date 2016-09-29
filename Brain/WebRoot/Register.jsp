<!DOCTYPE html>
<!--[if lt IE 7 ]><html lang="en" class="no-js ie6"><![endif]-->
<!--[if IE 7 ]><html lang="en" class="no-js ie7"><![endif]-->
<!--[if IE 8 ]><html lang="en" class="no-js ie8"><![endif]-->
<!--[if IE 9 ]><html lang="en" class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en" class="no-js" ><!--<![endif]-->
<head>
    <meta charset="UTF-8" />
    <title>脑力训练</title>
    <meta name="keywords" content=""/>
    <meta name="description" content="" />
    <meta name="baidu-site-verification" content="0JLnUTMxNu" />
    <meta property="qc:admins" content="16022241736110114566375" />
    <html xmlns:wb="http://open.weibo.com/wb">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link href="css/registerCss.css" rel="stylesheet" type="text/css" />
    <!--[if IE 7]>
    <link rel="stylesheet" href="http://www.aihaitun.com/css/font-awesome-ie7.min.css">
    <![endif]-->
    <link href="css/application.css" media="all" type="text/css" rel="stylesheet">

    
   
    <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
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
            <a href="/" class="home-link"><img src="img/logo-small.png" alt=""/></a>
            <ul class="nav pull-left">
	                  <li>
	                   		<a href="">今日课程</a>
	                  </li>
	                  <li>
	                    <a href="home/index.jsp">脑力游戏</a>
	                  </li>
	                  <li>
	                    <a href="">大脑档案</a>
	                  </li>
	                  <li>
	                    <a href="">打卡日记</a>
	                  </li>
	                  <li>
	                    <a href="">游戏排行榜</a>
	                  </li>
             </ul>
            <ul class=" pull-right  span4 ">
            	<div class="rightnav">
                   <!--   <a href="#help" class="header-item" data-toggle="modal" data-target="#modal-help-form">
                        <span class="icon help-icon"></span><span class="hidden">帮助</span>
                     </a> -->
                     <a href="#signin" data-toggle="modal" class="button gray" data-target="#modal-signin-form">登陆</a>
                     <a class="button-green button" href="Register.jsp">注册</a>
                  </div>
            </ul>
         </div>
    </div>
</div>

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

<div class="content">
    <div class="container signin">
        <div class="form-signin">
            <div class="modal-header" >
                <h3>加入脑力训练</h3>
            </div>
            <form method="POST" action="" accept-charset="UTF-8">
            	<div class="modal-body">
                       	<fieldset>
                            <div class="control-group">
                                <input id="user" placeholder="用户名*" type="text" name="username" onsubmit="check()"/><p class="warning" id="Uwarning"></p>                                                           
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="control-group">
                                <input id="password" placeholder="密码*" type="password" name="password"><p class="warning" id="Pwarning"></p>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="control-group">
                                <input id="password_confirmation" placeholder="确认密码*" type="password" name="password_confirmation"> <p class="warning" id="QPwarning"></p>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="control-group">
                                <input id="telephone" placeholder="手机号*" type="text" name="telephone"> <p class="warning" id="Twarning"></p>                                                         
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="control-group">
                                <input id="age" placeholder="年龄*" type="text" name="age"> <p class="warning" id="Awarning"></p>                                                          
                            </div>
                        </fieldset>
                        <fieldset>
                            <div class="control-group">
                            	<input id="sex" placeholder="请输入男或女或保密*" type="text" name="sex"> <p class="warning" id="Swarning"></p>  
                                                                                       
                            </div>
                        </fieldset>     
                </div>
                <div class="modal-footer">
                    <div class="control-group">
                        <div class="normal-login">
                            <a id ="register">点击注册账号</a>
                        </div>
                        <div class="third-login"></div>
                    </div>
                </div>
             </form>       
         </div>
    </div>
</div>
<div class="footer">
            <p class="copyright">© 2016 qfgzs 版权所有.</p>
</div>

<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="util/Check.js"></script>
<script type="text/javascript" src="js/registerJs.js"></script>
<script type="text/javascript" src="js/LoginJs.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.10.3.min.js"></script>
<script type="text/javascript" src="js/jquery.placeholder.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/jquery.icheck.min.js"></script>
<script src="js/application.js"></script>
<script type="text/javascript" src="js/swfobject.js"></script>
<script type="text/javascript" src="js/highcharts.js"></script>
<script type="text/javascript" src="js/highcharts-more.js"></script>

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
<script type="text/javascript">
    //GOOGLE
    function gaSSDSLoad(acct) {
        var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl."
            : "http://www."), pageTracker, s;
        s = document.createElement('script');
        s.src = gaJsHost + 'google-analytics.com/ga.js?' + new Date().getTime();
        s.type = 'text/javascript';
        s.onloadDone = false;
        function init() {
            pageTracker = _gat._getTracker(acct);
            pageTracker._trackPageview();
        }
        s.onload = function() {
            s.onloadDone = true;
            init();
        };
        s.onreadystatechange = function() {
            if (('loaded' === s.readyState || 'complete' === s.readyState)
                && !s.onloadDone) {
                s.onloadDone = true;
                init();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(s);
    }
    $(document).ready(function(){
                //百度
        var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        var bdscript=document.createElement('script');
        bdscript.type="text/javascript";
        bdscript.src=_bdhmProtocol+"hm.baidu.com/h.js?2fd57d4af93518d917810ffcab63a543";
        bdscript.defer="defer";
        document.body.appendChild(bdscript);
                //google
        gaSSDSLoad('UA-36712621-1');
    });
</script>
</body>
</html>