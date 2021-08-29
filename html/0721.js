window.onload = function () {
    var x = new Date();
    console.log(x.getMilliseconds());
    console.log(Math.floor((x.getMonth() + 3) / 3));

    var myCar = new Array("Saab", "Volvo", "BMW");;

    var name = myCar[0]
    console.log(name);

    myCar[0] = "Opel";
    console.log(myCar[0]);

    var hege = ["Cecilie", "Lone"];
    var stale = ["Emil", "Tobias", "Linus"];
    var parents = ["Jani", "Tove"];
    var con = hege.concat(stale, parents);
    console.log(typeof con);
    var change1 = con.join();
    console.log(typeof change1);
    con.pop();
    con.push("Kiwi");
    con.reverse();
    con.shift();
    var citrus = con.slice(1, 3);
    console.log(citrus);
    document.getElementById("demo3").innerHTML = citrus;
    document.getElementById("demo6").innerHTML = Math.max(5, 10);
    var circumference = Math.PI;
    var y1 = Math.sqrt(16);
    document.getElementById("demo7").innerHTML = circumference + "," + y1 + " " + Math.E;
    var str = "Visit RUnoob";
    var par1 = /runoob/i;
    document.getElementById("demo7").innerHTML = str.match(par1);
    var str2 = "Is this all there is?";
    var par2 = /is/gi;
    document.getElementById("demo8").innerHTML = str2.match(par2);
    var par3=new RegExp("e");
    document.getElementById("demo9").innerHTML=par3.test("The best things in life are free");
    
    var str ='runoob';
    var part1=new RegExp('\\w+','g');
    var part2=new RegExp('\w+','g');
    var part3=/\w+/g;
    document.getElementById("demo10").innerHTML=str.match(part1)+"\n"+str.match(part2)+"\t"+str.match(part3);

    document.getElementById("demo11").innerHTML=window.innerHeight+","+window.innerWidth;
    document.getElementById("demo12").innerHTML=screen.availHeight+","+screen.availWidth;
    console.log(window.location.href);
    

}
var myTime1 = setInterval(function(){myTime();},500);
function StopClock() {
    clearInterval(myTime1);
}
function myTime() {
    var t;
    var p1=new Date();
    t=p1.toLocaleTimeString();
    document.getElementById("ds").innerHTML=t;

}
function newDoc() {
    window.location.replace("https://www.runoob.com");
    // window.history.back();
    // window.history.forward();
    // history.go(1);
    // history.go(-1);
}
function myConfirm() {
    var x;
    var c= confirm("按下确认按钮");
    if(c==true){
        x="你按下了\"确定\"按钮";
    }else
        x="你按下了\"取消\"按钮";
    document.getElementById("confir").innerHTML=x;
}
function myPrompt() {
    var x;
    var personName=prompt("请输入你的名字","Harry Potter");
    if(personName!=""&&personName!=null){
        x="你好"+personName+"! 今天感觉如何？";
        document.getElementById("mp").innerHTML=x;
    }
}
function mySetInterval() {
    setInterval(function() {
        alert("Hello");
    },3000);
}



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("demo1").innerHTML = h + ":" + m + ":" + s;
    // t=setTimeout(() => {
    //     function startTime() {}
    // }, 500);
    t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10)
        i = "0" + i;
    return i;
}
function checkToday() {
    var x = new Date();
    x.setFullYear(2100, 0, 21);
    var today = new Date();
    if (x > today) {
        alert("今天是2100年1月21日之前");
    } else {
        alert("今天是2100年1月21日之后");
        console.log("2");
    }
}

Array.prototype.myUcase = function () {
    for (var i = 0; i < this.length; i++)
        this[i] = this[i].toUpperCase();
}

function myFunc() {
    var fruits = new Array("Banana", "Oranges", "Apple", "Mango");
    fruits.myUcase();
    document.getElementById("demo2").innerHTML = fruits;
}
function myRound() {
    document.getElementById("demo4").innerHTML = Math.round(2.5);
    document.getElementById("demo5").innerHTML = Math.random();
}