window.onload = function () {
    for (var i = 0; i < list.children.length; i++) {
        var val = list.children[i].innerHTML;
        list.children[i].innerHTML = val + '<span onclick="move(this)">删除<span>';
    }

}
function btn() {
    //获取表单的值
    var val = txt.value;
    if (val == '' && val == null) {
        alert('请输入内容！');
    } else {
        var tag = document.createElement('li');

        tag.innerHTML = val + '<span onclick="move(this)">删除<span>';
        if (list.children.length == 0) {
            list.appendChild(tag);
        } else {
            list.insertBefore(tag, list.children[0]);
        }
    }
    txt.value = '';
}
function move(Element) {
    Element.parentNode.parentNode.removeChild(Element.parentNode);
}