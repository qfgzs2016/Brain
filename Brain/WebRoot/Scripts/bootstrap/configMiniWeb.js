var version = "1.01";
function GotoNew(url) {
    if (isweixin()) {
        window.open(url, "_blank");
    }
    else {
        window.location.href = url;
    }
}
function GoBack(url) {
    window.location.href = url;
}

function isweixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}