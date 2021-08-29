window.onload = function () {
    function setCookie(cname, cvalue, exday) {
        var d = new Date();
        d.setDate = (d.getTime() + (exday * 24 * 60 * 60 * 1000));
        console.log(cname + cvalue + exday);
        var expires = "expires=" + d.toUTCString();
        console.log(expires);
        document.cookie = cname + "=" + cvalue + ";" + expires;
        console.log(cname + "=" + cvalue + ";" + expires);

    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name == 0)) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function checkCookies() {
        var user = getCookie("username");
        if (user != "") {
            alert("欢迎" + user + "再次访问！")
        } else {
            user = prompt("请输入你的名字", "");
            if (user != "" && user != null)
                setCookie("username", user, 60);
            console.log(user)
        }
    }

    function myJq() {
        $("#demo1").attr("style", "color:red").html("Hello JQuery");
    }
    $(document).ready(myJq);

}


var c = 0;
var t;
var time_is_on = 0;

function doTime() {
    if (!time_is_on) {
        time_is_on = 1;
        timeCount();
    }
}
function timeCount() {
    document.getElementById("txt").value = c;
    c = c + 1;
    t = setTimeout(function () { timeCount(); }, 500);
}
function stop() {
    clearTimeout(t);
    time_is_on = 0;
}

function Person(firstname,lastname,age,eyecolor) {
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}

var myFather=new Person("John","Doe",50,"blue");
