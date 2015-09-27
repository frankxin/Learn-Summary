###算法复杂度的计算标准

判断一个算法好不好，少量数据是无法证明的，在大量数据的情景下
除最高阶的数据外，其他几乎可以忽略不计
![](./img/poly-add.png)

####常数阶
对于分支结构，不管有多少分支，或者有没有分支
算法时间复杂度都为O(1)

####线性阶
循环体中的代码需要运行n次，所以时间复杂度为O(n)

####对数阶
对数阶，什么是对数呢，增长趋势越来越快，或越来越慢，非线性增长
O(logn)

####平方阶
内嵌套循环 O(n^2)

###栈与递归

####invert binary trees
```javascript
//recursive method
//node structure
function treeNode(val, left, right){
  this.val = val;
  this.left = left;
  this.right = right;
}

var invertTree = function(tree){
  if(tree && (tree.left || tree.right)){
    var temp = tree.left;
    tree.left = invertTree(tree.right);
    tree.right = invertTree(temp);
  }else{
    return null;
  }
  return tree
}

//none-recursive method
//node structure
function treeNode(val, left, right){
  this.val = val;
  this.left = left;
  this.right = right;
}

var invertTree = function(tree){
  if(tree && (tree.left || tree.right)){
    var stack = [];
    stack.push(tree);
    while(stack.length !== 0){
      var newTree = stack.pop();
      
      var temp = newTree.left;
      newTree.left = newTree.right;
      newTree.right = temp;
      if(newTree.left != null){
        stack.push(newTree.left);
      }
      if(newTree.right != null){
        stack.push(newTree.right);
      }
    }
  }
}
```

####Fibonacci

####四则运算的表达式求值

####Converting infix expression to a postfix expression
```javascript
//todo
```

###队列，循环队列

###串，朴素匹配与KMP匹配

###二叉树

####赫夫曼树
带权路径最小的二叉树

####huffuman编码
**任何字符的编码都不能是另一字符串的前缀**

###图

####无相完全图

###排序！！！！

####冒泡排序
####简单排序

####快排
递归快排
```javascript
var fastsort = function(arr,l,r){
  var i = l,j=r,x = arr[i];

  while(i < j){
    while(i < j && arr[j]>x){
      j--
    }
    if(i < j){
      arr[i] = arr[j];
      i++;
    }

    while(i<j && arr[i]<=x){
      i++;
    }
    if(i < j){
      arr[j] = arr[i];
      j--
    }
  }

  arr[i] = x;

  return i;
}
var quick_sort1 = function(s, l, r) {
  if (l < r) {
    var i = fastsort(s, l, r); //先成挖坑填数法调整s[]  
    quick_sort1(s, l, i - 1); // 递归调用   
    quick_sort1(s, i + 1, r);
  }
}
```

递归快排转非递归
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