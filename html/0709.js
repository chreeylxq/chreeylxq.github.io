function isValid(str) {
    return /^\w+$/.test(str);
}
str1="123abc_";
document.write(isValid(str1));
document.write("<br>");
 
str2="$322321^";
document.write(isValid(str2));
document.write("<br>");

function regExpress() {
    var patt1=new RegExp("e");
    document.write(patt1.exec("The best things in the life are free"));
}
regExpress();

var txt="";
function message() {
    try {
        adddlert("Welcome guest!");
    } catch (error) {
        txt="本页有一个错误。\n\n";
        txt+="错误描述："+error.message+"\n\n";
        txt+="点击确定继续。\n\n";
        alert(txt);
    }
}



// function finallyTest() {
//     var x,mess;
//     //打Log
//     mess=document.getElementById("p01");
//     mess.innerHTML="";
//     x=document.getElementById("demo").value;
//     try {
//         if(x=="") throw "The value is Empty.";
//         if(isNaN(x)) throw "The value is not numerical.";
//         x=Number(x);
//         if(x>10) throw "The number is too big.";
//         if(x<5) throw "The number is too small.";
//     } catch (err) {
//         mess.innerHTML="error:"+err+".";
//         alert(error.message);
//     }finally{
//         document.getElementById("demo").value="";
//     }
// }

function finallyTest() {
    var x,mess;
    mess=document.getElementById("p01");
    mess.innerHTML="";
    x=document.getElementById("demo").value;
    try {
        if(x=="") throw "The value is empty!";
        if(isNaN(x)) throw "The value is not numerical!";
        x=Number(x);
        if(x>10) throw "The value is too big!";
        if(x<5) throw "The value is too small!";
    } catch (error) {
        mess.innerHTML="error:"+error+".";
    }finally{
        document.getElementById("demo").value="";
    }
}

window.onload = function deBug() {
   
    var x=15*5;
    debugger;
    document.getElementById("deb").innerHTML= x ;
}