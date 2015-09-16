
###link与@import

link是HTML标签，@import是css定义的引用依赖的标志。

###解决HTML5新标签的浏览器兼容问题

HTML5shive

###iframe常用使用场景与iframe的通信

###cookies，sessionStorage 和 localStorage

###同源策略

协议（protocol），端口（如果指定），和主机都要相同

####解决跨域

Jsonp:  
通过script标签，callback后运行指定函数，并传入数据。  
Json由两部分组成，回调函数和数据。
带着数据运行回调。

图片打点：
img.src

CORS:

CORS主要是能做网站白名单过滤，通过设置Access-control-Allow-Origin，
在响应报头中，告诉浏览器这个，网站授信

iframe也可以跨域
通信方式，postmessage + window.navigator 的兼容



##CSS

###我常用的垂直水平居中（注意整体布局）

第一种：width都确定 `margin: 0 auto` (水平居中)

第二种：内层absolute，外侧relative的 负margin法

第三种：牛逼的transform

第四种：牛逼的table

###常用的清除浮动

第一种：插入额外dom clear：both；

第二种：

```css
.clearfix{
	zoom:1
}
.clearfix:after { 
   content: "."; 
   visibility: hidden; 
   display: block; 
   height: 0; 
   clear: both;
}
```

##Javascript

###闭包

###$(document).ready和window.onload的区别
**手写一个ready函数**

```javascript
document.ready = function(callback) {
    if (document.addEventListener) {
        document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
        callback();
    } else if (document.readyState === "complete") {
        // we're here because readyState === "complete" in oldIE
        // which is good enough for us to call the dom ready!
        document.detachEvent("onreadystatechange", DOMContentLoaded);
        callback();
    }
}
```


###用原生实现get和post
```javascript
function createXHR() {
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject != "undefined") {
    if (typeof arguments.callee.activeXString != "string") {
      var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", ￼i, len;
          "MSXML2.XMLHttp"
        ],
        for (i = 0, len = versions.length; i < len; i++) {
          try {
            new ActiveXObject(versions[i]);
            arguments.callee.activeXString = versions[i];
            break;
          } catch (ex) {
            //􏹸􏹹 }
          }
        }
      return new ActiveXObject(arguments.callee.activeXString);
    } else {
      throw new Error("No XHR object available.");
    }
  }
}

var xhr = createXHR();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if((xhr.status >= 200 && xhr < 300) || xhr.status  == 304){
      alert(xhr.responseText);
    }else{
      alert("something is wrong " + xhr.status);
    }
  }
}
xhr.open('get',url,true);
xhr.send(null); //null 是必须的，这里模拟的是get请求
```

###类数组转化为真实数组的实现
http://segmentfault.com/a/1190000000415572


###数组去重

hashmap
```javascript

Array.prototype.distinct = function(){
  var cache=[],i,result = [];
  //note: this is arrayLike Object
  for(i=0;i < this.length;i++){
    if(!cache[this[i]]){
      cache[this[i]] = true;
      result.push(this[i]);
    }
  }
  return result;
}

```

###用事件代理，给每一个li添加删除button

###将嵌套的js数组转化为一维数组的办法

```javascript

var plainArr = (function(arr){
  var result = [];

  function plainArrUtil(){
    var i = 0,arr = arguments[0];

    for(i = 0;i < arr.length;i++){
      if(arr[i] instanceof Array){
        plainArr(arr[i]);
      }else{
        result.push(arr[i]);
      }
    }
  }

  plainArrUtil(arr);

  return result;
});

```

递归调用

###对象类型的精确判断
```javascript
var class2type = {};
"Boolean Number String Function Array Date RegExp Object".split(' ').forEach(function(name, index){
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
})
var type = function(){
  var o = arguments[0];
  var type = Object.prototype.toString.call(o);
  return class2type[type]
}
```
###JS 操作dom的原生操作
```javascript

```

##计算机网络

###HTTP请求状态码
> 200 OK  
301 永久重定向  
302 暂时重定向 （和301的本质区别在哪）  
304 Not Modified  
400 Bad Request  
401 Unauthorized  
403 Forbidden  
404 Not Found  
