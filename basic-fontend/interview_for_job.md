##面经分享

##携程

####一个容器，一侧是文字一侧是图片，文字多少是不固定的会把容器撑开，问右侧图片怎么做到一直居中

```html
<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8">
	<title>JS Bin</title>
	<style>
		#wrap{
		border: 1px solid #000000;
		display:table;
		position:relative;
		
		}
		#wrap p{
		width: 100px;
		float:left;
		margin-left:10px;
		}
		#wrap img{
		float: left;
		vertical-align:middle;
		}
		#wrap:after{
		content: "";
		clear:both;
		display:block;
		}
		#wrap .avatar{
		display:table-cell;
		vertical-align:middle;
		}
	</style>
	</head>
	<body>
	<div id="wrap">
		<div class="avatar">
		<img width="100px" src="https://avatars3.githubusercontent.com/u/4299420?v=3&s=460"/>    
		</div>
		<p>what a bright day and can you give me a favor?</p>	
	</div>
	</body>
</html>
```

####深复制，浅复制

```javascript

function deepCopy(){
  
  var options = arguments[0],target = {},src,copyIsArray,clone,name;

  if(jQuery.isArray(options)){
    target = [];
  }
  
  for(name in options){
    copy = options[name];
    
    if(copy&&(jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){ 
       target[name] = deepCopy(copy);
    }else{
      target[name] = copy;
    }
  }

  return target;
}
var obj1 = {
  name: ["zhang","zhano","xin"],
  person: {
    age: 22,
    sex: "male"
  }
};
var obj2 = deepCopy(obj1);
console.log(obj2);

```

####跨域

####react和一些其他框架的经验

##网易

####CSRF -- 问题与解决方案

####CMD与AMD的区别

####BFC
具体实现一个 左定宽，右自适应布局

####前端Router的实现原理（考虑兼容性）

####打包发上线压缩以后的代码出现bug，怎么定位问题

####移动端点透的问题是怎么回事儿，解决方案，有没有了解过fastclick库是怎么实现的

##小米

1. 请定义这样一个函数
`function repeat (func, times, wait) {}`
这个函数能返回一个新函数，比如这样用
`var repeatedFun = repeat(alert, 10, 5000)`
调用这个 `repeatedFun ("hellworld")`
会alert十次 helloworld, 每次间隔5秒

Solution：
```javascript
//为什么console.log不行
function repeat(func, times, wait) {
  return funcWrap = function(s) {
    func.call(null, s);
    var timer = setInterval(function() {
      func.call(null, s);
      --times;
      if (times === 1) {
        clearInterval(timer);
      }
    }, wait)
  }
}
```

2. 写一个函数stringconcat， 要求能
```javascript
var result1 = stringconcat("a", "b")  result1 = "a+b"
var stringconcatWithPrefix = stringconcat.prefix("hellworld");
var result2 = stringconcatWithPrefix("a", "b")  result2 = "hellworld+a+b"
```

Solution:
```javascript
var toArray = function(){
  var arrayLike = arguments[0],
      i,
      array=[];

  for(i=0;i<arrayLike.length;i++){
    array.push(arrayLike[i]);
  }

  return array;
}

var stringconcat = function(){
  return toArray(arguments).join('+');
}
stringconcat.prefix = function(prefix){
  return function(){

    return prefix + '+' + toArray(arguments).join('+');
  }
}
```


##去哪儿

#### 四则运算validator

#### 弹球类似的东西

##小米

** 问的非常全面具体，很多忘了，说说印象最深的几个 **

####缓存策略
**具体** 怎么设置

####写个事件触发器
(模拟事件)
detail: [Javascript Event System](./javascript_event_system.md)

####下面代码输出
```javascript

function f(){
	this.name = "zhang";
	this.constructor = function(){
		this.age = 12
	}
}
var a = new f();
a.hasOwnProperty('constructor'); //false
'constructor' in a // true

```

####`Object instanceof Function`和`Function instanceof Object`

####原生Ajax上传图片

####递归和非递归

举个例子，递归快排转非递归快排，或是按层遍历二叉树

