window.onload=function(){
    var myNodeList=document.querySelectorAll("p");
    document.getElementById("demo1").innerHTML="第二个段落内的内容为：<span style=color:'red';>"+myNodeList[1].innerHTML+"</span>";
    document.getElementById("demo2").innerHTML="文档包含"+myNodeList.length+"个段落。";
    for( var i=0; i<myNodeList.length;i++){
        myNodeList[i].style.backgroundColor="red";
    }
}