
var num = 0;
function btn() {
    //创建标签
    var tag = document.createElement('h1');
    num++;
    //新增内容
    tag.innerHTML = '新增的内容';
    tag.style.color = 'pink';

    //追加标签 a.appendChild(b)  a是b标签的父级，把b追加到 a 内部的后面
    document.body.appendChild(tag);

    // var tag1 = document.createElement('p');
    // tag1.innerHTML = '这是一个新增的p标签内容';

    // document.body.appendChild(tag1);//因为body是唯一的， document.body
    var tag1 = document.createElement('li');
    tag1.innerHTML = '新增的li标签' + num;
    list.appendChild(tag1);
}