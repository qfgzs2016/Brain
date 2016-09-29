var num = 0;
$(function () {
    comet(num);
});
function comet(count) {
    $.ajax({
        type: "post",
        url: "/WCF/NewMessage.ashx",
        data: {"time":"60" ,"type":"0","IsRead":"0","num":count},
        success: function (result) {
            var data = JSON.parse(result);
            if (data.code > 0) {
                num = data.count;
                parent.window.cometcallback(data);
            }
            comet(num);
        },
        error: function (request, status, error) {
            comet(num);
        }
    });
}