function outter(){
    //var c =document.getElementById("test4").innerHTML="段落修改";
    document.write(Date()+"\n");
}
// window.alert(5+6);
document.write(Date());
var a=5;
var b=6;
var c=a+b;
console.log(c);

function check1(name,job){
    alert("welcome "+name+",the "+job);
}

function add(){
    document.write("<br> 加法运算");
    var a=5;
    var b=4;
    document.write("<br>"+(a+b)+"<br>");
}
add();

function connectTest(){
    var txt1="What a very";
    var txt2="nice day";
    //return txt1+txt2;
    document.getElementById("ct").outerHTML=txt1+txt2+"\n";
}
function backType() {
    document.getElementById("bt1").innerHTML=typeof "john"+"<br>"+
                                            typeof  3.14 +"<br>"+
                                            typeof false +"<br>"+
                                            typeof [1,2,3,4] +"<br>"+
                                            typeof {name:'john',age:34};
}
function marchLocation() {
    var str="Visit Runoob!";
    var n =str.search(/Runoob/i);
    document.getElementById("ml").outerHTML=n;
}
function replaceWord() {
    var str=document.getElementById("re").innerHTML;
    var txt=str.replace(/Microsoft/i,"Runoob");
    document.getElementById("re").outerHTML=txt;
}
