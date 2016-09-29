<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<%@ page pageEncoding="UTF-8"%>
<Layout:overwrite name="title">
脑力训练
</Layout:overwrite>
 <Layout:overwrite name="Mycss">
<link type="text/css" href="./css/reaction.css" rel="stylesheet" />
</Layout:overwrite> 

<Layout:overwrite name="MyContent">
<div>
	<canvas id="reaction_canvas" width="800" height="600">你的浏览器不支持canvas元素，请更新或更换你的浏览器。</canvas>
</div>


</Layout:overwrite>
 <Layout:overwrite name="MyScript">
 	<script src="./js/currency.js"></script>
	<script src="./js/reaction.js"></script>
 </Layout:overwrite> 
<%@ include file="/share/_Layout.jsp"%>