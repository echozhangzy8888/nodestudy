[TOC]
# Header Text 
## Header Text 
### Header Text
https://segmentfault.com/a/1190000002773955
http://www.w3cplus.com/css/3d-transform-and-z-index.html  

### 1.垂直对齐
~~~
.verticalcenter{
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
~~~

###2.伸展一个元素到窗口高度
在具体场景中，你可能想要将一个元素伸展到窗口高度，基本元素的调整只能调整容器的大小,因此要使一个元素伸展到窗口高度，我们需要伸展顶层元素： `html` 和`body` 
~~~
html, 
body {
    height: 100%;
}
~~~

然后将100%应用到任何元素的高：
~~~
div {
    height: 100%;
}
~~~

