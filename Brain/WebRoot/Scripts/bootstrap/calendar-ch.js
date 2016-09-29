
var Calendar = function () {


    return {
        //main function to initiate the module
        init: function () {

            App.addResponsiveHandler(function () {
                Calendar.initCalendar();
            });

            $('.page-sidebar .sidebar-toggler').click(function () {
                Calendar.initCalendar();
            });

            Calendar.initCalendar();
        },

        initCalendar: function () {

            if (!jQuery().fullCalendar) {
                return;
            }

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            var h = {};

            if (App.isRTL()) {
                 if ($('#calendar').parents(".portlet").width() <= 720) {
                    $('#calendar').addClass("mobile");
                    h = {
                        right: 'title, prev, next',
                        center: '',
                        right: 'agendaDay, agendaWeek, month, today'
                    };
                } else {
                    $('#calendar').removeClass("mobile");
                    h = {
                        right: 'title',
                        center: '',
                        left: 'agendaDay, agendaWeek, month, today, prev,next'
                    };
                }                
            } else {
                 if ($('#calendar').parents(".portlet").width() <= 720) {
                    $('#calendar').addClass("mobile");
                    h = {
                        left: 'title, prev, next',
                        center: '',
                        right: 'today,month,agendaWeek,agendaDay'
                    };
                } else {
                    $('#calendar').removeClass("mobile");
                    h = {
                        left: 'title',
                        center: '',
                        right: 'prev,next,today,month,agendaWeek,agendaDay'
                    };
                }
            }
           
            function getData(url,start,end,title,allDay,status,id){
        		
        		var data = $.ajax({
        		    data : {
                    	'start' : start,
                    	'end' : end,
                    	'title': title,
                    	'allDay' : allDay,
                    	'status' : status,
                    	'id' : id
                        },
        			url : url,
        			async : false
        		}).responseText; 
        		return data;
        	}
       
            function updateData(url,dayDelta,minuteDelta,status,id,title){//status=2 为拖动时  3为 删除  4 为拉动时修改
        	//	alert(id);
        		var data = $.ajax({
        		    data : {
                    	'status' : status,
                    	'id' : id,
                    	'dayDelta':dayDelta,
                    	'minuteDelta':minuteDelta,
                    	'title':title
                    	
                        },
        			url : url,
        			async : false
        		}).responseText; 
        		return data;
        	}
            function FormatDate (strTime) {
                var date = new Date(strTime);
                if(date.getMinutes()=="0")
                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
            }
            Date.prototype.pattern=function(fmt) {  
            	
                var o = {         
                "M+" : this.getMonth()+1, //月份         
                "d+" : this.getDate(), //日         
                "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
                "H+" : this.getHours(), //小时         
                "m+" : this.getMinutes(), //分         
                "s+" : this.getSeconds(), //秒         
                "q+" : Math.floor((this.getMonth()+3)/3), //季度         
                "S" : this.getMilliseconds() //毫秒         
                };         
                var week = {         
                "0" : "/u65e5",         
                "1" : "/u4e00",         
                "2" : "/u4e8c",         
                "3" : "/u4e09",         
                "4" : "/u56db",         
                "5" : "/u4e94",         
                "6" : "/u516d"        
                };         
                if(/(y+)/.test(fmt)){         
                    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
                }         
                if(/(E+)/.test(fmt)){         
                    fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
                }         
                for(var k in o){         
                    if(new RegExp("("+ k +")").test(fmt)){         
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
                    }         
                }         
                return fmt;         
            };       
            function AddData(url,status,Title,StartTime,EndTime,allDay){//status=2 为拖动时  3为 删除  4 为拉动时修改   		
            	var data = $.ajax({
        		    data : {
                    	'status' : status,
                    	'start':new Date(StartTime).pattern("yyyy-MM-dd hh:mm:ss"),
                    	'end':new Date(EndTime).pattern("yyyy-MM-dd hh:mm:ss"),
                    	'title':Title,
                    	'allDay':allDay,
                    	'dayDelta':"",
                    	'minuteDelta':""
                        },
        			url : url,
        			async : false
        		}).responseText; 
        		return data;
        	}
            var initDrag = function (el) {
                // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
                // it doesn't need to have a start or end
                var eventObject = {
                    title: $.trim(el.text()) // use the element's text as the event title
                };
                // store the Event Object in the DOM element so we can get to it later
                el.data('eventObject', eventObject);
                // make the event draggable using jQuery UI
                el.draggable({
                    zIndex: 999,
                    revert: true, // will cause the event to go back to its
                    revertDuration: 0 //  original position after the drag
                });
            }
            
            var addEvent = function (title) {
                title = title.length == 0 ? "Untitled Event" : title;
                var html = $('<div class="external-event label">' + title + '</div>');
                jQuery('#event_box').append(html);
                initDrag(html);
            };

            $('#external-events div.external-event').each(function () {
                initDrag($(this))
            });

            $('#event_add').unbind('click').click(function () {
                var title = $('#event_title').val();
                addEvent(title);
            });

            //predefined events
            $('#event_box').html("");
            addEvent("管理信息系统");
            addEvent("javaweb");
            addEvent("计算机网络");
            addEvent("oracle");
            addEvent("ERP");
            addEvent("市场营销");
            $('#calendar').fullCalendar('destroy'); // destroy the calendar
            $('#calendar').fullCalendar({ //re-initialize the calendar
                header: h,
                slotMinutes: 15,
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar !!!
                drop: function (date,allDay) { // this function is called when something is dropped

                    // retrieve the dropped element's stored Event Object
                    var originalEventObject = $(this).data('eventObject');
                    // we need to copy it, so that multiple events don't have a reference to the same object
                    var copiedEventObject = $.extend({}, originalEventObject);
                    
                    // assign it the date that was reported
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;
                    copiedEventObject.className = $(this).attr("data-class");
                    
                    // render the event on the calendar
                    // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
                   // alert("title:"+copiedEventObject.title+"start:"+date+"end:"+jsEvent.end+"allDay:"+allDay);
                   AddData("com.Manager.Individual/InsertUpdateDelCal",'0',copiedEventObject.title,copiedEventObject.start,copiedEventObject.end,copiedEventObject.allDay);
                    // is the "remove after drop" checkbox checked?
                    if ($('#drop-remove').is(':checked')) {
                        // if so, remove the element from the "Draggable Events" list
                        $(this).remove();
                    }
                },
                events: "com.Manager.Individual/Arrangement",
            	eventClick: function(event) {
            		var form = $("<form class='form-inline'><label>修改Title &nbsp;</label></form>");
        			form.append("<input id='saveTitle' class='middle span3 m-wrap popovers' autocomplete=off type=text value='" + event.title + "' /> ");
        			form.append("<button type='submit' class='btn btn-sm green'><i class='icon-ok'></i> Save</button>");
        		//	alert(event.ID);
        			var div = bootbox.dialog({
        				message: form,
        			
        				buttons: {
        					"delete" : {
        						"label" : "<i class='icon-trash'></i> Delete Event",
        						"className" : "btn-sm btn red",
        						"callback": function() {
        							//alert(event.ID);
        						//	$('#calendar').fullCalendar('removeEvents',event.ID);
        							
        							 updateData("com.Manager.Individual/InsertUpdateDelCal","","",'3',event.ID,event.title);	
        							 location.reload(true);
        						}
        					} ,
        					"close" : {
        						"label" : "<i class='icon-remove'></i> Close",
        						"className" : "btn-sm"
        					} 
        				}

        			});
        			form.on('submit', function(){
        				event.title = form.find("input[type=text]").val();
        				$('#calendar').fullCalendar('updateEvent', event);
        				 updateData("com.Manager.Individual/InsertUpdateDelCal","","",'1',event.ID,event.title);
        				div.modal("hide");     				
        				return false;
        			});
            		
    				/*var title = prompt('请输入:',event.title);
    				if (title) {	
    					var temp=getData("com.Manager.Individual/Arrangement",'', '',title, '','1',event.id);
    					event.title = title;
    					 $('#calendar').fullCalendar('updateEvent', event);
    					 updateData("com.Manager.Individual/InsertUpdateDelCal","","",'1',event.ID,event.title);
    				}
    				calendar.fullCalendar('unselect',event);   */
    				
    			},
    			eventDrop:function( event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view ) { //向后移动		
    				$('#calendar').fullCalendar('removeEvents',event.ID);
    				updateData("com.Manager.Individual/InsertUpdateDelCal",dayDelta,minuteDelta,'2',event.ID);
    				//alert("updateData2:"+event.end);
    			},
    			eventResize:function( event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ) {
    				//var a=updateData("com.Manager.Individual/InsertUpdateDelCal",dayDelta,minuteDelta,'4',event.id);
    				//alert("updateData2:"+a);
    			},
    			eventDragStart:function(event,jsEvent,ui,view) { 
    				 //alert("拖拽开始")
    			},//拖拽事件开始
    			eventDragStop:function( event,jsEvent, ui, view ) { 
    				
    			},//拖拽结束
    			eventMouseover:function( event, jsEvent, view ) {// alert("鼠标悬浮")
    				},//鼠标悬停在一个事件中触发
    			
    			eventMouseout:function( event, jsEvent, view ) { 
    				// alert("鼠标离开");
    			},//鼠标移开事件时触发
    			 eventRender: function (event, element) {
    				// alert("Test");
    			 },//当日程事件渲染时触发，
    			eventAfterRender: function (event, element, view) {		
    				//alert(event.start);
    				//AddData("com.Manager.Individual/InsertUpdateDelCal",'0',event.title,event.start,event.end,event.allDay);
    			}//当日程事件渲染后触发
            });

        }

    };

}();