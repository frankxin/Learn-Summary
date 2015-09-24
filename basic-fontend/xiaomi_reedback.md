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
我的理解：实例和构造函数之间并没有直接关系，constructor是构造函数指向的原型的属性，这个属性同时又指回构造函数
有个问题，constructor被设计在原型中的原因是要共享吗？

-------

`Object instanceof Function`和`Function instanceof Object`竟然都返回true。。跪了

Object, Function, Array这些都是构造函数。。既然他们被成为”函数“，那`Object instanceof Function`
就是Function的实例了，所以返回true

`Function instanceof Object`通过原型链找到继承的Object对象。

-------

递归和非递归

先问个问题，非递归算法一般情况下是否比对应的递归算法要快？

递归到非递归虽然节约了很多内存，一般遇到递归问题是不是要首先考虑转化为非递归？

再说说递归快排转非递归快排的问题~

栈的缓存数据结构：
```javascript
/**
 *  arr is array to sort , 
 *  l is the first number pointer , 
 *  r is the last number pointer
 */
var fastsort = function(arr, l, r) {
    var stack = [];
	
    stack.push(l);
    stack.push(r);

    while (stack.length !== 0) {

      var j = stack.pop(),
        i = stack.pop(),
        start = i,
        end = j,
        x = arr[i];

      while (i < j) {

        while (i < j && arr[j] > x) {
          j--
        }
        if (i < j) {
          arr[i] = arr[j];
          i++;
        }

        while (i < j && arr[i] <= x) {
          i++;
        }
        if (i < j) {
          arr[j] = arr[i];
          j--
        }
      }
      arr[i] = x;

      if (start < i - 1) {
        stack.push(l, i - 1);
      }
      if (i + 1 < end) {
        stack.push(i + 1, r);
      }

    }

    return arr;
  }
```
