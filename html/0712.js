window.onload=function floatConsiderartion() {
    x=9;
    document.getElementById("as").innerHTML=x;
    var x,elem;
    var x=0.1;
    var y=0.2;
    var z=x+y;
    document.getElementById("fc").innerHTML=z;

    var person=[];
    person[0]="John";
    person[1]="Doe";
    person[2]=46;
    document.getElementById("arrayHash").innerHTML=person[0]+" " +person.length;

//    有问题！！！！！！！！！
    var person2=[];
    person2["firstName"]="John";
    person2["lastName"]="Doe";
    person2["age"]=46;
    document.getElementById("ah").innerHTML=person2.firstName +" "+person2.length;
}

function validateForm() {
    var x=document.forms["firstForm"]["fname"].value;
    if(x==null||x==""){
        alert("Need input name!!!");
        return false;
    }
    
}
function inputNumb() {
    var x,text;
    x=document.getElementById("numb").value;
    if(isNaN(x)||x<1||x>10){
        text="error!";
    }else{
        text="bingo!!!";
    }
    document.getElementById("numb").value="";
    document.getElementById("checknumb").innerHTML=text;
}
function vdForm() {
    var x;
    x=document.forms["cform"]["cname"].value;
    if(x==null||x==""){
        alert("姓名必须写！");
        return false;
    }
}
function vdeForm() {
    var x=document.forms["ce-mail"]["e-mail"].value;
    
}





