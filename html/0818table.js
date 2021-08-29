function add() {
    if (user.value == "" || clas.value == "") {
        alert('请填写完整信息！');
    } else {
        var tag = document.createElement('tr');
        tag.innerHTML = '<td><input type="checkbox" name="selected"></td> <td>' + user.value + '</td><td>' + clas.value + '</td><td class="del" onclick="dele(this)">删除</td>';
        person.appendChild(tag);
    }
    user.value = '';
    clas.value = '';
}

function dele(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
}

// function alls() {
//     for (var i = 0; i < person.children.length; i++) {
//         person.children[i].children[0].children[0].checked = true;
//     }

// }

/*
    通过form的name值.表单元素的name值，选择标签
    如果表单元素的name对于的值只有一个是相同的，得到的就是该标签，如果是多个得到的是数组
*/
function alls() {
    if (forms.selected == undefined) {
        alert('没有学生信息！');
    } else if (forms.selected.length == undefined) {
        forms.selected.checked = true;
    } else {
        for (var i = 0; i < forms.selected.length; i++) {
            forms.selected[i].checked = true;
        }
    }
}

function del() {
    if (forms.selected == undefined) {
        alert('没有学生信息！')
    } else if (forms.selected.length == undefined) {
        //判断是否选中
        if (forms.selected.checked == true)
            forms.selected.parentNode.parentNode.parentNode.removeChild(forms.selected.parentNode.parentNode);
    } else {
        for (var i = 0; i < forms.selected.length; i++) {
            if (forms.selected[i].checked == true) {
                forms.selected[i].parentNode.parentNode.parentNode.removeChild(forms.selected[i].parentNode.parentNode);
                i--;
            }
        }
    }

}