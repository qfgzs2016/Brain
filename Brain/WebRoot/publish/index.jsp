<!-- 
		这是自定义标签模板，如果用不到哪个标签请删除，不然会报错
 -->
<%@ taglib uri="Mytag" prefix="Layout"%>
<Layout:overwrite name="title">
I am title
</Layout:overwrite>
<%-- <Layout:overwrite name="Mycss"></Layout:overwrite> --%>

<Layout:overwrite name="MyContent">
<div>欢迎您：${loginuser.uname }</div>


</Layout:overwrite>
<%-- <Layout:overwrite name="MyScript"></Layout:overwrite> --%>
<%@ include file="/share/_Layout.jsp"%>