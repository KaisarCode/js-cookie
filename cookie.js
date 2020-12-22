// Set cookie
function setCookie(n, v, exp, ss) {
    ss = ss || 'strict';
    var d = new Date();
    d.setTime(d.getTime() + (exp*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = n + "=" + v + ";" + expires + ";Path=/;sameSite="+ss;
}

// Get cookie
function getCookies() {
    var ck = document.cookie.split(';');
    var out = {};
    ck.forEach(function(c){
        c = c.split('=');
        k = c[0];
        v = c[1] || '';
        out[k.trim()] = v.trim();
    }); return out;
}
