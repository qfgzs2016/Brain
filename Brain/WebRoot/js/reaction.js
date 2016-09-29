// JavaScript Document
	var cx=0;//canvas右上角坐标
	var cy=0;
	var cwidth=800;//canvas大小
	var cheight=600;
	var ctx;//canvas
	var radius=20;//圆点半径
	var appear;//圆点出现时间
	var disappear;//消失时间
	var firstccl;//圆点对象first circle
	var isExist=true;//是否存在
	var everyActionTime=[];
	var beginGme;
	var testNumber=10;//测试次数 
	
	function circle(cx,cy,radius,appear,disappear){
		this.cx=cx;
		this.cy=cy;
		this.radius=radius;
		this.appear=appear;
		this.disappear=disappear;
		this.draw=drawcircle;
	}
	
	function drawcircle(){
		var x=Math.floor(Math.random()*(cwidth-radius*2))+radius;//多的圆点随机位置
		var y=Math.floor(Math.random()*(cheight-radius*2))+radius;
		firstccl=new circle(x,y,radius,appear,disappear);	
		firstccl.appear= new Date();
				
		ctx.beginPath();
		ctx.arc(firstccl.cx,firstccl.cy,firstccl.radius,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();	
		isExist=true;
	}
	
	function distsq(x1,y1,x2,y2){
		return (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
	}
	function findcircle(ev){//判断鼠标是否点中圆点并作出反应
		var mx;
		var my;
		if(ev.layerX || ev.layerX==0){
			mx=ev.layerX;
			my=ev.layerY
		}
		else if(ev.offsetX || ev.offsetX==0){
			mx=ev.offsetX;
			my=ev.offsetY;
		}
		if(distsq(mx,my,firstccl.cx,firstccl.cy)<radius*radius){
			isExist=false;
			
			firstccl.disappear=new Date();
			var appear=firstccl.appear;
			var disappear=firstccl.disappear;
			var beginSecond=appear.getMinutes( )*60*1000+appear.getSeconds( )*1000+appear.getMilliseconds( );//获得圆点出现时的秒数
			var endSecond=disappear.getMinutes( )*60*1000+disappear.getSeconds( )*1000+disappear.getMilliseconds( );//获得圆点消失时的秒数
			var sumSecond=endSecond-beginSecond;
			everyActionTime.push(sumSecond);
			ctx.clearRect(cx,cy,cwidth,cheight);
			testNumber--;
			if(testNumber==0){
				alert("第一轮结束");	
				testNumber=10;
			}
			drawcircle();
		}
	}
	
	function getAllTime(){
		var allTime=0,aveTime;
		for(var i=1;i<everyActionTime.length;i++){//第一次的不算
			allTime+=everyActionTime[i];	
		}
		aveTime=allTime/(everyActionTime.length-1);
	}
	function init(){
		ctx=document.getElementById('reaction_canvas').getContext('2d');
		drawcircle();
		var canvas=document.getElementById('reaction_canvas');
		canvas.addEventListener('mousedown',findcircle,false);
	}
	addLoadEvent(init);