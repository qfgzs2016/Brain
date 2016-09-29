
		/*************************验证用户名的格式****************************/
       		window.onload = function(){ 
				document.getElementById('username').onkeyup=function (){
					if(document.getElementById('username').value==""){
						document.getElementById('uwarning').innerHTML="";		
					}
					else{
						if(checkuser(this.value)){
							document.getElementById('uwarning').style.color='#FC3';
							document.getElementById('uwarning').innerHTML="此用户名可用";
						}
						else
						{
							document.getElementById('uwarning').style.color='red';
							document.getElementById('uwarning').innerHTML="请输入6~16位有字母、数字、下划线组成的用户名";
						}	
					}
				}// JavaScript Document
				
				 $("#login").click(function(){
					 	var username=$("#username").val().trim();
					 	var password=$("#passwords").val().trim();
					 	alert(username+" "+password);
					   $.ajax({
				           url: "servlet/UserLoginServlet",
				           type: "POST",
				           data: { username: username, password: password},
				           dataType: "json",
				           success: function (result) {            	
				               if (result.code == 1) {
				            	//   noty({ text: "登录成功", type: 'success', layout: 'topCenter', timeout: 2000 });  
				               		location.href="home/index.jsp";
				               }
				               else{
				            	   alert("登录失败");
				            	//   noty({ text: "登录失败", type: 'warning', layout: 'topCenter', timeout: 2000 });  
				               }
				           }
				         
					   })
				 })
       		}
	
	

		


	
	
	
	
	
			
			
			
