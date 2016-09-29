// JavaScript Document

var time=0;
var rdn=0;
var list=new Array();
function getRandNum(){
    var i=-1;
    while(i==-1||!conin(i)){
        i= Math.round(Math.random()*16);
        if(i==0)
            i=-1
    }
    return i;
}
function conin(n){
    for(var i=0;i<list.length;i++){
        if(n==list[i]){
            list[i]=0;
            return true;
        }
    }
    return false;
}
var timer;
function start(){
    rdn=1;
    clearInterval(timer);
    var $span=$("#itemspan");
    for(var i=1;i<=16;i++){
        list[i-1]=i;
    }
    var $ul=$("#check-ul").empty();
    for(var i=0;i<16;i++){
        var rd=getRandNum();
        $ul.append("<li class='check-li' onclick='ck(this,"+rd+")'>"+rd+"</li>");
    }
    $("check-li",$ul).each(function(i,li){
        $(li).mousedown(function(){
        	
            $(li).addClass("right");
           
        });
        $(li).mouseup(function(){
            $(li).removeClass("right");
        });
    });
    time=0;
    timer=setInterval(function(){
        time+=10;
        $span.html(time/100.0);
    },100);
}
function stop(){
    rdn=1;
    clearInterval(timer);
    if(confirm("你的成绩是:"+(time/100.0)+"秒"))
    start();
}
function ck(li,rd){
    $(".error").removeClass("error");
    var $li=$(li);
    if(rd==rdn)
    {
    //  $li.addClass("right");
        rdn++;
        $("#numspan").html(rdn);
    }else{
        $li.addClass("error");
    }
    if(rdn>16){
        $("#numspan").empty();
        stop();
    }
}
