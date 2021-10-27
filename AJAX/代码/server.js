// 1.引入express
const { response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装 
app.all("/server", (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    response.send("HELLO AJAX");
});
app.get('/json-server', (request, response) => {

    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    // 响应一个数据
    const data = {
        name: 'xiaoqian',
    };
    // 对对象进行字符串转化
    let str = JSON.stringify(data);


    // 设置响应内容
    response.send('HELLO AJAX JSON12sv');
    // response.send(str);

});

app.get('/ie', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('HELLO IE3trterte');
})

// 延时响应
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('延时响应');
    }, 3000)
});

app.get('/JQuery-AJAX', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send('Hello JQuery-AJAX!');
    const data = { name: 'luxiaoqian' }
    response.send(JSON.stringify(data));
})

app.post('/JQuery-AJAX', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send('Hello JQuery-AJAX');
    const data = { name: 'luxiaoqian' };
    response.send(JSON.stringify(data));
})

app.all('/Axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');


    const data = {
        name: 'luxiaoqian',
        age: 24
    };
    response.send('Hello axios')
})

// fetch服务
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: 'xiaobai',
        age: 25,
    }
    response.send(JSON.stringify(data));
})

// 用户名检测是否存在
app.all('/check-server', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已存在'
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end('handl(' + str + ')');
});

// JQuery-jsonp
app.get('/jquery-server', (request, response) => {
    const data = {
        name: 'luxiaoqian',
        city: 'shanghai',
    };

    let str = JSON.stringify(data);

    // 接收 callback 参数
    let cb = request.query.callback;
    response.end(cb + '(' + str + ')')

})

// cors-server
app.get('/cors-server', (request, response) => {
    // 设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello cors');
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("server服务已经启动，8000 端口监听中......");
})