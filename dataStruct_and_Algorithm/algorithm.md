##Find brother words

eg. cat , act , tac , tca are bother words.

So.
```javascript
//todo:##Find brother words

//eg. cat , act , tac , tca are bother words.
/**
 * Test case:
 * findBro('act');
 * return with a brother words array
 */
var dict = ['cat','act','tac','bee','fuck','bright','sunrise']

var findBro = function(){
  var word,resultArr,wordSorted
  
  word = arguments[0]
  wordSorted = word.split("").sort().join("")

  resultArr = dict.filter(function(item,index) {

    return (item.split("").sort().join("") === wordSorted) ? true : false
    
  })

  return resultArr
}
```

##Arithmetic validator

eg. 
`{(6+4)*[(7-1)/10]}` is ok
`{(6+4)*[(7-1/10]}` is wrong

So.
```javascript
//todo:Arithmetic validator

/**
 * eg. 
 * `{(6+4)*[(7-1)/10]}` is ok
 * `{(6+4)*[(7-1/10]}` is wrong
 */

/**
 * Test case:
 * arVali('{(6+4)*[(7-1)/10]}')
 * return true
 */

var arvali = function() {
  var exp, expArr, stack, i, l, error

  exp = arguments[0]
  expArr = exp.split("")
  stack = []

  for (i = 0, l = expArr.length; i < l; i++) {

    if ("{}[]()".indexOf(expArr[i]) !== -1 && "{[(".indexOf(expArr[i]) !== -1) {

      stack.push(expArr[i]);

    } else if ("{}[]()".indexOf(expArr[i]) !== -1 && ")]}".indexOf(expArr[i]) !== -1) {

      switch (expArr[i]) {
        case ')':
          (function() {
            if (stack.pop() === "(") {

            } else {
              alert("error");
              return false;
            }
          })();
          break;
        case ']':
          (function() {
            if (stack.pop() === "[") {

            } else {
              alert("error");
              return false;
            }
          })();
          break;
        case '}':
          (function() {
            if (stack.pop() === "{") {} else {
              alert("error");
              return false;
            }
          })();
          break;
      }
    }
  }
  
  if (stack.length === 0) {
    alert('pass')
  }
}
```



