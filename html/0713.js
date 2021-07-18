function checkNumb() {
    var inpObj = document.getElementById("cn");
    if (inpObj.checkValidity() == false) {
        document.getElementById("message").innerHTML = inpObj.validationmessage;
    } else {
        document.getElementById("message").innerHTML = "输入正确";
    }
}

function checkAgain() {
    var c = document.getElementById("cnmb");
    if (c.validity.rangeOverflow) {
        document.getElementById("message1").innerHTML = "输入值太大了";
    } else if (c.value == "" || c.value == null) {
        document.getElementById("message1").innerHTML = "请输入数字~";
    } else {
        alert(c.validity.rangeOverfslow);
        document.getElementById("message1").innerHTML = "输入正确！";
    }
}
function test1() {
    var c = document.getElementById("test1");
    if (c.validity.toolong) {
        alert("too long");
    } else alert("right")
}
window.onload = function useThis() {
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        myFunction() {
            return this;
        }
    };
    document.getElementById("ut").innerHTML = person.fullName();
    document.getElementById("ut3").innerHTML = person.myFunction();
    var x = this;
    document.getElementById("ut1").innerHTML = x;
    "use strict";
    var c = this;
    document.getElementById("ut2").innerHTML = c;

    person1 = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    document.getElementById("ut4").innerHTML = person1.fullName.call(person);


    var globlev = "Volvo";
    te();
    function te() {
        document.getElementById("gv").innerHTML = "我可以显示" + globlev;
    }
    outv();
    function outv() {
        var carName = "Volvo";
    }
    document.getElementById("gv1").innerHTML = "carName的类型是：" + typeof carName;

    var text = '{"site":[' +
        '{"name":"Runoob","url":"www.runoob.com"},' +
        '{"name":"Google","url":"www.google.com"},' +
        '{"name":"Taobao","url":"www.taobao.com"}]}';
    obj = JSON.parse(text);
    document.getElementById("no").innerHTML = obj.site[1].name + " " + obj.site[1].url;

    function print() {
        document.getElementById("ap").innerHTML = "Runoob"
    }
    setTimeout(print, 3000);


}

// var xhr=new XMLHttpRequest();
// xhr.onload=function () {
//     document.getElementById("aa").innerHTML=xhr.responseText();
// }
// xhr.onerror=function () {
//     document.getElementById("aa").innerHTML="请求出错！";
// }

// xhr.open("GET","https://www.baidu.com",true);
// // xhr.send();

// $(document).ready(function () {
//     $("button").click(function () {
//         $get("0713.php",function(data,status) {
//             alert("数据："+data+"\n状态："+status);
//         });
//     });
// });



function print1(msg, delay) {
    return new Promise(
        function (resolve, reject) {
            setTimeout(     
                function () {
                    console.log(msg);
                    resolve();
                }, delay);

        });
}

print1("first", 1000).then(function () {
    print1("second", 2000).then(function () {
        print1("third", 3000);
    })
});

function print2(msg, delay) {
    var p = new Promise((resolve, reject) => myDelay(msg, delay, resolve));
    return p;
}

function myDelay(msg, delay, resolve) {
    var afterDelay = () => logging(msg, resolve);
    setTimeout(afterDelay, delay);
}

function logging(msg, resolve) {
    console.log(msg);
    resolve();
}
print2("qwe", 1000).then(() => print2("asd", 2000)).then(() => print2("zxc", 3000));

async function helloAsync() {
    return "helloAsync";
}
// 有问题！！！
console.log(helloAsync());
console.log(helloAsync.then(value));
helloAsync.then(v=>{console.log(v);});








