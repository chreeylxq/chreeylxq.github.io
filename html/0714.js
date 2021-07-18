window.onload = function () {
    var x = function (a, b) {
        return a * b;
    }
    document.getElementById("res").innerHTML = x(3, 4);
    function myFunction() {
        return arguments.length;
    }
    document.getElementById("demo1").innerHTML = myFunction(3, 4);

    const arr = (x, y) => x * y;
    document.getElementById("demo2").innerHTML = arr(5, 6);

    function checkPara(x, y) {
        // if(y==undefined){
        //     y = 0 ;
        // }
        y = y || 0;
        return x * y;
    }
    document.getElementById("demo3").innerHTML = checkPara(4);

    x = findMax(1, 123, 500, 115, 44, 88);
    function findMax() {
        var i, max = arguments[0];
        if (arguments.length < 2) {
            return max;
        }
        console.log(max);
        console.log(arguments.length);
        for (i = 0; i + 1 < arguments.length; i++) {
            if (arguments[i + 1] > max) {
                max = arguments[i + 1];
            }
            console.log(max);
        }
        return max;
    }
    console.log(typeof x);
    document.getElementById("demo4").innerHTML = x;


    suma = sumAll(1, 123, 500, 115, 44, 88);
    function sumAll() {
        this.i = 0;
        var sum = 0;
        for (i = 0; i < arguments.length; i++)
            sum += arguments[i];
        // console.log(sum);
        return sum;
    }
    console.log(typeof x);
    document.getElementById("demo5").innerHTML = suma.i;

    // var myObject = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     fullName: function () {
    //         // return this.firstName + " " + this.lastName;
    //         return this;
    //     }
    // };
    // document.getElementById("demo6").innerHTML = myObject.fullName();

    function test() {
        return this;
    }
    document.getElementById("demo7").innerHTML = test();
    console.log(test());

    var x = new neFunc("John", "Doe");
    var y= new neFunc("qwe","asd");
    function neFunc(arg1, arg2) 
    {
        this.firstName = arg1;
        this.lastName = arg2;
        this.asd = "asd";    
        this.thisObj = this;
    }

    document.getElementById("demo8").innerHTML = y.firstName;

    var myObj;
    function myObjFunc(a, b) {
        return a * b;
    }
   // myObj = myObjFunc.call(myObj, 10, 2);
    myObj=myObjFunc.apply(myObj,[10,2]);
    document.getElementById("demo9").innerHTML = myObj;

}
// var counter = 0;
// function add() {
//     return counter += 1;
// }
// function myAdd(){
//     var counter = 0;
//     function plus() {
//         counter += 1;
//     }
//     plus();
//     document.getElementById("wsum").innerHTML=add();
// }

//函数的自我调用
var add = (function () {
    var count = 0;
    return function () { return count += 1; }
})();
function locvacounting() {
    document.getElementById("demo11").innerHTML = add();
    document.getElementById("demo12").innerHTML = add;
}
