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

So. //todo



