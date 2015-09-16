##面经分享

####携程

一个容器，一侧是文字一侧是图片，文字多少是不固定的会把容器撑开，问右侧图片怎么做到一直居中

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

深复制，浅复制

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

跨域

react和一些其他框架的经验