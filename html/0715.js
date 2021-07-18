
// var x = document.getElementById("intr");
// document.write("<p>文本来自id为intr的段落：" + x.innerHTML + "</p>");

// var c = document.getElementById("main");
// console.log(c);
// var y = c.getElementsByTagName("p");
// document.write('id="main"元素中的第一个段落为：' + y[0].innerHTML);

window.onload = function () {
    document.getElementById("intr").style.color = "pink";
    document.getElementById("intr").style.fontFamily = "微软雅黑";
    document.getElementById("intr").style.fontSize = "larger";

    document.getElementById("myBtn").onclick = function () { displayTime(); };
    function displayTime() {
        document.getElementById("demo2").innerHTML = Date();
    }
    
    document.getElementById("btn").addEventListener("click",function() {
        myFunc1(p1,p2);
    });

    var para=document.createElement("p");
    var node=document.createTextNode("这是一个新的段落");
    para.appendChild(node);

    var element=document.getElementById("div1");
    var child=document.getElementById("p2");
    element.insertBefore(para,child);
    element.removeChild(para);
    console.log(child.parentElement.id);

    var myCollection=document.getElementsByTagName("p");
    document.getElementById("demo7").innerHTML="第二个段落的内容是：<span style='color:red';>"+myCollection[1].innerHTML+"</span>";
    document.getElementById("demo8").innerHTML=myCollection.length;

}

function myFunc() {
    var c = document.getElementById("demo3");
    c.value = c.value.toUpperCase();
}

function changeText(id) {
    console.log(id);
    id.innerHTML = "Ooops";

}
// function checkCookies() {
//     if (navigator.cookieEnabled == true) {
//         alert("Cookies可用！");
//     } else alert("Cookies不可用！");
// }

function mOver(obj) {
    obj.innerHTML = "Thank you!";
}
function mOut(ojb) {
    ojb.innerHTML = "Mouse Over Me";
}
 var p1=5;
 var p2 = 6;
 
 function myFunc1(a,b) {
     var result =a*b;
     document.getElementById("demo6").innerHTML=result;
 }
 window.addEventListener("resize", function(){
    document.getElementById("demo5").innerHTML = Math.random;
});




