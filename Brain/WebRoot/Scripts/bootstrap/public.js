function checkItem(obj) {
    if (obj.checked) {
        $(obj).closest("span").addClass("checked");
    }
    else {
        $(obj).closest("span").removeClass("checked");
    }
}
function CheckAll(obj) {
    //var chkItems = $(".checkboxes")
    var chkItems = $(obj).closest("table").find(".checkboxes")
    if (chkItems.length > 0) {
        for (var i = 1; i < chkItems.length; i++) {
            chkItems[i].checked = obj.checked;
            checkItem(chkItems[i]);
        }
    }
}
function CheckAllInContainer(containerID, obj) {
    var chkItems = $("#" + containerID + " .checkboxes")
    if (chkItems.length > 0) {
        for (var i = 0; i < chkItems.length; i++) {
            chkItems[i].checked = obj.checked;
            checkItem(chkItems[i]);
        }
    }
}
//js去html标签函数
function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str = str.replace(/&nbsp;/ig, '');//去掉&nbsp;
    str = str.replace("<", "");
    str = str.replace(">", "");
    return str;
}
//check正整数
function IsDigit(s) {
    var patrn = /^[0-9]*$ /;
    if (!patrn.test(s))
        return false
    return true
}
