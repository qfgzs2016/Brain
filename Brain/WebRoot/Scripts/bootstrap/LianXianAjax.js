(function ($) {
    $.lianXian = $.lianXian || {};
    $.lianXian.ajax = function (options) {
        if (typeof options.checkLoadingName != "undefined") {
            options.checkLoadingName = options.checkLoadingName.toLowerCase();
            var loading = $("body").attr("data-" + options.checkLoadingName);
            if (loading == "1") {
                return;
            }
            $("body").attr("data-" + options.checkLoadingName, "1");
        }
        //$.lianXian.showMask(options);
        var top = $(window).height() / 2;
        var left = $(window).width() / 2;
        $("#ajax-loading").css({"position": "absolute","top": top, "left": left}).show();
        $.ajax({
            type: options.type,
            url: options.url,
            data: options.data,
            dataType: options.dataType,
            success: function (data) {
                if (typeof options.success === "function") {
                    options.success(data);
                }
            },
            error: function (request, status, errorMessage) {
                if (typeof options.error === "function") {
                    options.error(request, status, errorMessage);
                }
            },
            complete: function () {
                if (typeof options.checkLoadingName != "undefined") {
                    $("body").attr("data-" + options.checkLoadingName, "0");
                }
                if (typeof options.complete === "function") {
                    options.complete();
                }
                $("#ajax-loading").hide();
                //$.lianXian.hideMask({

                //});
            }
        });
    };
    $.lianXian.showMask = function (opt) {
        var options = {
            containerSelector: "body",
            replace: true,
            autoHide: false,
            autoHideTimeout:400
        };
        var mask = $("<div id=\"div_mask\"></div>");
        mask.css({
            "position": "absolute",
            "z-index": 1000000,
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": "100%"
        });
        if (options.autoHide) {
            setTimeout(function () {
                $.lianXian.hideMask({
                    containerSelector: options.containerSelector
                });
            }, options.autoHideTimeout);
        }
        $(options.containerSelector).find("#div_mask").append(mask);
    };
    $.lianXian.hideMask = function (opt) {
        var options = {
            containerSelector: "body",
            timeout:0
        };
        if (options.timeout == 0) {
            $(options.maskSelector).remove();
        }
        else {
            setTimeout(function () {
                $(options.maskSelector).remove();
            }, options.timeout);
        }
    }
    $.lianXian.showMessage = function (message) {
        var divMessage = $("<div style='position:fixed;padding:5px 15px 5px 15px;min-width:50px;min-height:25px;vertical-align:middle;color:white;background:black;z-index:100002;filter:alpha(opacity=70);-moz-opacity:0.7;-khtml-opacity: 0.7; opacity: 0.7;'></div>");
        $("body").append(divMessage);
        divMessage.html(message);
        var top = ($(window).height() - divMessage.height()) / 2;
        var left = ($(window).width() - divMessage.width()) / 2;
        divMessage.css({ "top": top, "left": left });
        if (typeof time == "undefined") {
            time = 2000;
        }
        setTimeout(function () {
            divMessage.remove();
            if (typeof callback != "undefined") {
                callback();
            }
        }, time);
    };
})($ || window.$);