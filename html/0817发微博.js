function btn() {
    var tag = document.createElement('li');

    //文本域的值通过value获取
    tag.innerHTML = text.value + '<span onclick="move(this)">删除</span>';

    //判断如果文本域如果为空不能发布成功。 检测li是否为空。若不为空，内容放置在最前
    if (text.value != '' && list.children.length != 0) {

        // list.appendChild(tag);
        //a.insertBefore(b,c) 把 b 追加到 c 的同级之前，a 是 c 的父级
        // old.parentNode.insertBefore(new,old)

        list.insertBefore(tag, list.children[0]);
        text.value = '';
    } else alert('请输入内容！！！')

}


window.onload = function () {
    var tags = document.getElementsByTagName('li');
    for (var i = 0; i < tags.length; i++) {
        var txt = tags[i].innerHTML;
        tags[i].innerHTML = txt + '<span onclick="move(this)">删除</span>';
    }
    console.log("1");
}
console.log("out of html"); return;



//给所有span增加点击事件

function move(span) {


    span.parentNode.parentNode.removeChild(span.parentNode);
}
