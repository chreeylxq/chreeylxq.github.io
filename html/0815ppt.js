

function $(x) {
    return document.getElementsByClassName(x);
}

var dots = $('dot');
var numb = 0;

// function removeObj(obj, className) {
//     var classArr = obj.className.split(' ');
//     var _index = classArr.indexOf(className);
//     if (_index != -1) {
//         classArr.splice(_index, 1);
//         obj.className = classArr.join(' ');
//     }
// }

// function dotChangeBg() {
//     for (var i = 0; i < dots.length; i++) {
//         removeObj(dots[i], 'current');
//     }
//     dots[numb].className += ' ' + 'current';
// }

function changeClassName() {
    for (var i = 0; i < dots.length; i++) {
        if (i == numb) {
            dots[i].className = "dot current"
        }
        else {
            dots[i].className = "dot"
        }
    }
}

function onext() {
    numb++;
    if (numb > 2) {
        numb = 0;
    }
    sc.style.left = -1000 * numb + 'px';
    // dotChangeBg();
    changeClassName();

}
function oprev() {
    numb--;
    if (numb < 0) {
        numb = 2;
    }
    sc.style.left = -1000 * numb + 'px';
    // dotChangeBg();
    changeClassName();
}


