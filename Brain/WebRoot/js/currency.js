// JavaScript Document
/***********************页面加载完执行函数的函数*********************************/

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();	
		}
	}
}

/*********************得到下一个元素结点node为.nextSibling**********************************/
function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

/*******************自定义的insertAfter函数***************************/
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);	
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);	
	}
}
/**************************用dom改变元素的class属性***************************/
/***addClass***/
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}
/***改变某元素下一个相邻元素的样式***/
function styleElementSibling(tag,theclass){
	if(!document.getElementsByTagName) return false;
	var elems=document.getElementsByTagName(tag);
	var elem;
	for(var i=0;i<elems.length;i++){
		elem =getNextElement(elems[i].nextbling);
		add(elem,theclass);	
	}
}

/********************让标签动起来*****************************************/
function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);	
	}
	if(!elem.style.left){
		elem.style.left="0px";		
	}
	if(!elem.style.top){
		elem.style.top="0px";		
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	var dist=0;
	if(xpos==final_x && ypos==final_y) return true;
	if(xpos<final_x)
	{
		dist=Math.ceil((final_x-xpos)/10);
		xpos+=dist;
	}
	if(xpos>final_x){
		dist=Math.ceil((xpos-final_x)/10);
		xpos-=dist;
	}
	if(ypos<final_y){
		dist=Math.ceil((final_y-ypos)/10);
		ypos+=dist;
	}
	if(ypos>final_y){
		dist=Math.ceil((ypos-final_y)/10);
		ypos-=dist;
	}
	
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);		
}


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
