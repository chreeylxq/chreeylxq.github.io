var inputs = document.getElementsByTagName('input');



/*控制标签属性
    获取标签属性：获取标签.标签属性
    修改或者设置属性：获取标签.标签属性='对应值'  class比较特别className


*/
function allchecked() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute('checked', 'checked');
    }
}
function uncheckedAll() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute('checked');
    }
}
function re() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            inputs[i].checked = false;
        } else inputs[i].checked = true;
    }

}