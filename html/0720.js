window.onload = function () {
    var message = "Hello World";
    var x = message.length;
    console.log(x);
    x = message.toUpperCase();
    console.log(x);

    var person = new Object();
    console.log(person.firstName);
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 24;
    person.eyecolor = "blue";

    console.log(person.firstName);

    person = { firstName: "zhang", lastName: "san", age: 23, eyecolor: "black" };
    console.log(person.eyecolor);
    var txt = "";
    for (var x in person) {
        txt += person[x];
    }
    console.log(txt);


    function Car(name, year, color, price) {
        this.name = name;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    Car.nation = "English";
    var myCar = new Car("bwm", "2021", "blue", 23000);
    console.log(myCar.nation);
    Car.prototype.nation = "English";
    console.log(myCar.nation);

    // var myNumber = 2;
    // while (myNumber != Infinity) {
    //     myNumber *= myNumber;
    //     document.write(myNumber + '<br>');
    // }
    var y = 1000 / "1000";
    console.log(typeof y);
    var y = Infinity;
    console.log(isNaN(y));

    var carname = "V o l v o X C 6 0";
    var carname1 = 'Volvo XC60';
    console.log(carname.length + typeof carname);
    console.log(carname1.length + typeof carname1);
    console.log(carname[2]);
    console.log(carname.indexOf("XC"));
    console.log(carname.match("XC"));
    // var txt = carname.replace("CCghkhlh", "XC");
    // console.log(txt);
    var str = document.getElementById("demo");
    console.log(str.replace);
    console.log(carname.toUpperCase());
    console.log(carname.toLowerCase());
    console.log(carname.split(","));
    console.log(carname.split("|"));
    console.log(carname.split(" "));
    console.log(carname.prototype);


}
function myFunc() {
    document.getElementById("demo1").innerHTML = Date();
    var y = new Date();
    document.getElementById("demo2").innerHTML = y.getFullYear();
    document.getElementById("demo3").innerHTML = y.getTime();
    document.getElementById("demo4").innerHTML = y.setFullYear(2020, 7, 20);
    document.getElementById("demo5").innerHTML = y.toUTCString();

    var d = new Date();
    console.log(d.getDay());
    var today = d.getDay();
    console.log(typeof today);
    console.log(today);
    var weekday = new Array(7);
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wensday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    weekday[0] = "Sunday";
    document.getElementById("demo6").innerHTML = weekday[today];

}