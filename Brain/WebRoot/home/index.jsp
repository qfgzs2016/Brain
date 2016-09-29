<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
首页
</Layout:overwrite>
 <Layout:overwrite name="Mycss">
 	    <link rel="stylesheet" href="css/font-awesome.min.css">
    	<link href="css/application.css" media="all" type="text/css" rel="stylesheet">
</Layout:overwrite> 

<Layout:overwrite name="MyContent">
<div>
	<div class="span9 spanoffset">
    <div id="courses-container">
        <div class="topic-group topic-group-1">
            <div class="primary-heading">
                <h1>所有游戏</h1>
                <p><span class="icon-large icon-star-empty"></span> 糙米等富含维生素B1能醒脑提神。维生素B1能将葡萄糖转化成能量，人体缺乏维生素B1会导致身体疲劳，甚至精神紧张焦虑，注意力无法集中。富含维生素B1的食材有糙米、猪肉等。</p>
            </div>
            
                        <ul class="achievement-grid">
                                <li class="primary half">
                    <a href="game/reaction.jsp" class="achievement-link">
                        <div class="achievement-hero feature">
                               <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">快速点击</p>
                            <h4>注意力</h4>
                            <img alt="点击" src="img/black.jpg">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
                                <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">规律纸牌</p>
                            <h4>逻辑推理能力</h4>
                            <img alt="规律纸牌" src="img/check.png">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
                             <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">智慧拼图</p>
                            <h4>多任务处理能力</h4>
                            <img alt="智慧拼图" src="img/check.png">
                        </div>
                    </a>
                </li>
                            </ul>
                            
                        <ul class="achievement-grid">
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
                              <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">点黑点</p>
                            <h4>注意力</h4>
                            <img alt="黑点" src="img/black.jpg">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
                              <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">规律纸牌</p>
                            <h4>逻辑推理能力</h4>
                            <img alt="规律纸牌" src="img/check.png">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
                              <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span> 
                            <p class="category">智慧拼图</p>
                            <h4>多任务处理能力</h4>
                            <img alt="智慧拼图" src="img/check.png">
                        </div>
                    </a>
                </li>
                            </ul>
                            
                           <ul class="achievement-grid">
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
                    			 <span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">点黑点</p>
                            <h4>注意力</h4>
                            <img alt="黑点" src="img/check.png">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
                    		<span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">规律纸牌</p>
                            <h4>逻辑推理能力</h4>
                            <img alt="规律纸牌" src="img/check.png">
                        </div>
                    </a>
                </li>
                                <li class="primary half">
                    <a href="" class="achievement-link">
                        <div class="achievement-hero feature">
            				<span class="corner-icon corner-new">
                                  <span class="icon new-icon"></span>
                                </span>
                            <p class="category">智慧拼图</p>
                            <h4>多任务处理能力</h4>
                            <img alt="智慧拼图" src="img/check.png">
                        </div>
                    </a>
                </li>
                            </ul>                     
                        <div class="module">
                <div class="sub-heading"></div>
       
            <p class="copyright">© 2016 qfgzs 版权所有.</p>
        </div>
    </div>
</div>
</div>
</div>

</Layout:overwrite>
<Layout:overwrite name="MyScript">
	 <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	 <script type="text/javascript" src="util/Check.js"></script>
	 <script type="text/javascript" src="js/registerJs.js"></script>
	 <script type="text/javascript" src="js/LoginJs.js"></script>
     <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
</Layout:overwrite>
<%@ include file="/share/_Layout.jsp"%>
