/*************************验证用户名的格式****************************/
       		function checkuser(us){
       			
				var reg=/^[a-zA-z]\w{5,15}$/;
				return (reg.test(us));			
			}


/*************************验证密码的格式****************************/
			function checkpass(pa)
			{
				var reg= /[a-zA-Z0-9]{6,16}/;   //6~16位密码，有数字和字母组成，字母区分大小写
				return (reg.test(pa));
				
			}
/*************************验证电话号码***********************/
			
			function checknum(num)
			{
				var reg=/^1[34578]\d{9}$/;
				return (reg.test(num));
			}	
/*************************检查年龄******************************/
			  function checkage(ag){
				  var age =/^(1[89])|([2-7][0-9])|(80)$/;
				  return (age.test(ag));
			  }
			
/*************************检查年龄******************************/
			function checksex(se){
				 var sex =/^['男'|'女'|'保密']$/ ;
				return (sex.test(se));
			 }
			
			  
			