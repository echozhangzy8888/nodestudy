Express安装入门与模版引擎ejs

http://expressjs.com/
https://www.npmjs.org/package/express

~~~
express testWebApp
~~~

##修改app.js文件并运行
~~~
app.listen(8100,function(){
    console.log("Server Start!");
});
~~~

1.在sublime中运行过后，如果想要关闭，去任务管理器中结束node.exe进程
2.不在sublime中运行，可以在cmd中执行node app，关闭使用快捷键Ctrl+C


##express参数
 Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass) (defaults to plain css)
    -f, --force         force on non-empty directory　　

　### 1.创建一个express + ejs的项目
https://github.com/visionmedia/ejs
~~~
express -e testEjsWebApp
cd testEjsWebApp
npm install
~~~

ejs结尾的文件就是模版文件，可以看到在文件中我们用了三种标签方式（这种标签方式有过其它web开发经验的应该很好看懂）
　　1.<%= %>
　　这个标签在接到收到title: '<h1>Express</h1>'时，从显示效果来看，他直接输出HTML标签到页面上，输出的是转义后的变量值

　　2.<%- %> 　　
　　而这个标签，从显示效果上看，他没有直接输出HTML代码到页面上，输出的是没有转义后的变量值

　　3.<% %>
　　而这个标签，从显示上看，他循环了出来参数中的值，标签中是javascript逻辑代码，注意括号的开闭合

##express项目分析
　　1.app.set(name,value)   把名字为name的项的值设为value，用于设置参数

    2.app.use([path], function)   
      用这个方法来使用中间件，因为express依赖于connect，有大量的中间件，可以通过app.use来使用；
      path参数可以不填，默认为'/'  (项目中用到的就不分别解释了，用到的时候自已查一API的中间件部分)

      app.use(express.static(path.join(__dirname, 'public'))); 这一句中可能要注意一下，express.static( )是处理静态请求的，设置了public文件，public下所有文件都会以静态资料文件形式返回（如样式、脚本、图片素材等文件）

     3.app.get(name)  获取名为name的项的值

#Nodejs学习笔记（六）--- Node.js + Express 构建网站预备知识
~~~
express -e sampleEjsPre
cd sampleEjsPre && npm install
~~~

<% include 文件名 %> express提供include来嵌入其它页，这和html嵌入其它页类似

##提交表单接收参数
ET和POST方式接收值，从直接效果上来看：
　　req.query：我用来接收GET方式提交参数
　　req.body：我用来接收POST提交的参数
　　req.params：两种都能接收到

Express的Request部分的API:  http://expressjs.com/api.html#req.params

##如何字符串加密?
Node.js提供了一个加密模块 Crypto http://nodejs.org/api/crypto.html
####NODE.JS加密模块CRYPTO常用方法介绍   http://www.jb51.net/article/50668.htm
~~~
crypto.createHash(algorithm)
~~~
创建并返回一个hash对象，它是一个指定算法的加密hash，用于生成hash摘要。
参数algorithm可选择系统上安装的OpenSSL版本所支持的算法。例如：'sha1', 'md5', 'sha256', 'sha512'等

~~~
hash.update(data)
~~~
更新hash的内容为指定的data。当使用流数据时可能会多次调用该方法。

~~~
hash.digest(encoding='binary')
~~~
计算所有传入数据的hash摘要。参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'。

一个不可逆的加密代码：
~~~
var text = "123|12312312123123121231231212312312123123121231231212312312";
var hasher=crypto.createHash("md5");
hasher.update(text);
var hashmsg=hasher.digest('hex');//hashmsg为加密之后的数据
~~~

一个加密和解密的环境时：
~~~
var key="asdhjwheru*asd123-123";//加密的秘钥
var text = "123|12312312123123121231231212312312123123121231231212312312";
var crypted =cipher.update(text,'utf8','hex');
crypted+=cipher.final('hex');
var message=crypted;//加密之后的值
var decipher = crypto.createDecipher('aes-256-cbc',key);
var dec=decipher.update(message,'hex','utf8');
dec+= decipher.final('utf8');//解密之后的值
~~~

##如何使用session?
Internet通讯协议分为stateful和stateless两类，对Web开发有一定了解的应该知道，http是stateless协议，客户端发送请求到服务端建立一个连接，请求得得到响应后连接即中断，服务器端不会记录状态，因此服务器端想要确定是哪个客户端提交过来的请求，那就必须要借助一些东西去完成，就是session和cookies

session存在于服务器端，需要cookies的协助才能完成；服务器端和客户端通过session id来建立联系（具体session和cookies怎么协作的，可以自已去补充点相关知识，这里只简单提一下，不展开了，要不然这篇文章就更杂了^_^!）

express中可以用中间件来使用session，express-session( https://github.com/expressjs/session ) 可以存在内存中，也可以存在mongodb、redis等中...
更多中间件：https://github.com/senchalabs/connect#middleware

官方示例：https://github.com/visionmedia/express/blob/master/examples/session/index.js

##如何使用cookies?
如果是登录，那常见就是“记录密码”或“自动登录”功能，这个一般用 cookies来完成
cookies存在客户端，安全性较低，一般要存入加密后的信息；建议要设置使用过期时间或不使用时删除掉

express也同样可以用中间件来使用：https://github.com/expressjs/cookie-parser
示例设计思路：在上面session示例的基础上，在usecookies部分登录同时记录cookies，来自动登录
官方示例：https://github.com/expressjs/express/blob/master/examples/cookies/index.js

##如何清除session和cookies?
~~~
//清除cookies
res.clearCookie('islogin');
  
//清除session
req.session.destroy();
~~~

##node.js + Express 实现上传文件功能（felixge/node-formidable）