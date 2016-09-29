
		/*************************验证用户名的格式****************************/
       		
       			
				document.getElementById('user').onkeyup=function (){
					if(document.getElementById('user').value==""){
						document.getElementById('Uwarning').innerHTML="";		
					}
					else
					{
							if(checkuser(this.value))
						{
							document.getElementById('Uwarning').style.color='#FC3';
							document.getElementById('Uwarning').innerHTML="格式正确";
						}
						else
						{
							document.getElementById('Uwarning').style.color='red';
							document.getElementById('Uwarning').innerHTML="请输入6~16位有字母、数字、下划线组成的用户名";
						}	
					}
				
				/*************************验证密码的格式****************************/
				document.getElementById('password').onkeyup=function ()
				{
					if(document.getElementById('password').value=="")
					{		
						document.getElementById('Pwarning').innerHTML="";		
					}
					else
					{
						if(checkpass(this.value))
						{
							document.getElementById('Pwarning').style.color='#FC3';
							document.getElementById('Pwarning').innerHTML="完成密码输入";
						}
						else
						{
							document.getElementById('Pwarning').style.color='red';
							document.getElementById('Pwarning').innerHTML="请输入6~16位有字母、数字、下划线组成的密码";
						}  
					}
			    }
				
				/*************************验证第二次密码于第一次是否一样**********/
	 			document.getElementById('password_confirmation').onblur=function()
				{
					var pass=document.getElementById('password').value;
					if(document.getElementById('password_confirmation').value=="")
					{
						document.getElementById('QPwarning').innerHTML="";		
					}
					else
					{
							if(pass==document.getElementById('password_confirmation').value)
						{
							document.getElementById('QPwarning').style.color="#FC3";
							document.getElementById('QPwarning').innerHTML="两次密码一致";	
						}
						
						else
						{
							document.getElementById('QPwarning').style.color="red";
							document.getElementById('QPwarning').innerHTML="你两次输入的密码不一致，请重新输入";	
							
						}
						
					}
					
					
				}
	 			

	 			/*************************验证电话号码***********************/
	 				
	 			 document.getElementById('telephone').onkeyup=function()
	 			{
	 				if(document.getElementById('telephone').value=="")
	 				{
	 					document.getElementById('Twarning').innerHTML="";		
	 				}
	 				else
	 				{
	 					if(checknum(this.value))
	 					{
	 						document.getElementById('Twarning').style.color="#FC3";
	 						document.getElementById('Twarning').innerHTML="电话号码有效";	
	 					}
	 					else
	 					{
	 						document.getElementById('Twarning').style.color="red";
	 						document.getElementById('Twarning').innerHTML="电话号码格式错误";	
	 						
	 					}
	 				
	 				} 
	 			}
       		}
       		/*************************验证年龄的格式****************************/
			document.getElementById('age').onkeyup=function ()
			{
				if(document.getElementById('age').value=="")
				{		
					document.getElementById('Awarning').innerHTML="";		
				}
				else
				{
					if(checkage(this.value))
					{
						document.getElementById('Awarning').style.color='#FC3';
						document.getElementById('Awarning').innerHTML="年龄有效";
					}
					else
					{
						document.getElementById('Awarning').style.color='red';
						document.getElementById('Awarning').innerHTML="年龄错误";
					}  
				}
		    }
			/*************************验证性别的格式****************************/
			document.getElementById('sex').onkeyup=function ()
			{
				if(document.getElementById('sex').value=="")
				{		
					document.getElementById('Swarning').innerHTML="";		
				}
				else
				{
					if(checksex(this.value))
					{
						document.getElementById('Swarning').style.color='#FC3';
						document.getElementById('Swarning').innerHTML="性别有效";
					}
					else
					{
						document.getElementById('Swarning').style.color='red';
						document.getElementById('Swarning').innerHTML="性别错误";
					}  
				}
		    }
					
			
			/*************************检查用户名是否已经被注册******************************/
		$("#user").blur(function(){	
			var username = $("#user").val().trim();
			//var upassword=$("#password").val().trim();
			
			 $.ajax({
		           url: "servlet/CheckRegister",
		           type: "POST",
		           data: { username: username/*, upassword: upassword*/},
		           dataType: "json",
		           success: function (result) { 
		               if (result.code == 1) {
		            	   document.getElementById('Uwarning').style.color='#FC3';
							document.getElementById('Uwarning').innerHTML="此用户名可用";
		            	   //noty({ text: "用户名可用", type: 'success', layout: 'topCenter', timeout: 2000 });  
		               		//alert("用户名可用");
		               }
		               else{    
		            	   document.getElementById('Uwarning').style.color='red';
		            	   document.getElementById('Uwarning').innerHTML="用户名已被注册";
		            	  // noty({ text: "用户名已存在！！", type: 'warning', layout: 'topCenter', timeout: 2000 }); 
		            	  //alert("用户名已经存在！！");
		               }
		           }
		         
			   })			
			})
			
			$("#register").click(function(){
			 	var uname=$("#user").val().trim();
			 	if(!checkuser(uname)){
			 		return;
			 	}
			 	var password=$("#password").val().trim();
			 	if(!checkpass(password)){
			 		return;
			 	}
			 	var telephone=$("#telephone").val().trim();
			 	if(!checknum(telephone)){
			 		return;
			 	}
			 	var age=$("#age").val().trim();
			 	if(!checkage(age)){
			 		return;
			 	}
			 	var sex=$("#sex").val().trim();
			 	if(!checksex(sex)){
			 		return;
			 	}
			 	alert(uname+"  "+password+"  "+telephone+"  "+telephone);
			 	
			   $.ajax({	   
		           url: "servlet/UserRegisterServlet",
		           type: "POST",
		           data: { uname: uname, password: password,telephone:telephone,age:age,sex:sex},
		           dataType: "json",
		           success: function (result) {            	
		               if (result.code == 1) { 
		            	   alert("lll ");
		               		location.href="home/index.jsp";   
		               }
		               else{
		            	   alert("注册失败");
		               }
		           }
		         
		})
 })

		
		