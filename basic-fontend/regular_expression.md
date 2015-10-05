<link rel="stylesheet" href="http://yandex.st/highlightjs/6.2/styles/googlecode.min.css">
 
<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="http://yandex.st/highlightjs/6.2/highlight.min.js"></script>
 
<script>hljs.initHighlightingOnLoad();</script>
<script type="text/javascript">
 $(document).ready(function(){
      $("h2,h3,h4,h5,h6").each(function(i,item){
        var tag = $(item).get(0).localName;
        $(item).attr("id","wow"+i);
        $("#category").append('<a class="new'+tag+'" href="#wow'+i+'">'+$(this).text()+'</a></br>');
        $(".newh2").css("margin-left",0);
        $(".newh3").css("margin-left",20);
        $(".newh4").css("margin-left",40);
        $(".newh5").css("margin-left",60);
        $(".newh6").css("margin-left",80);
      });
 });
</script>
<div id="category"></div>
> Author: Frankxin. Last modified: 2015.9


####Useful pattern

> MDN reference:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

####Meaning of Regular expression flags
> "i" is case insensitive search ,if you set it, that will ignore the uppercase and lowercase  
> "g" is global , it will make a global search, and index , the last index when you search will be
record in RegExp object as a attribute lastIndex.  
> "m" is mutiline , if you set it , `^` will match the line behind `\n\r` and
 `$` will match the line before `\n\r` , for example:
 ```javascript
 var ss = "The man hit the ball with the bat ";
    ss += "\nwhile the fielder caught the ball with the glove.";
 var pattern = /^while/m; // notice that there is a "^".
 var r = ss.replace(pattern , "love"); //Here , the "while" will be replace by "love"
 console.log(r);
 ```

####Useful method and Something to notice

There are two ways , we can use regular expression . The One is RegExp object , 
the other one is String object.

**RegExp instance attributes:**

1. global: boolean  
2. ignoreCase: boolean  
3. multiline: boolean  
4. source: the regular expression's string  
5. lastIndex: the beginning of next search

```javascript
var pattern1 = /\[bc\]at/i;
    console.log(pattern1.global); //flase
    console.log(pattern1.ignoreCase); //true
    console.log(pattern1.multiline); // flase
    console.log(pattern1.lastIndex); //0
    console.log(pattern1.source); //"\[bc\]at"
```
**RegExp instance method:**

1.exec()
> From MDN: A RegExp method that executes a search for a match in a string. 
It returns an array of information.

For example:

```javascript
var someText="web2.0 .net2.0";
var pattern=/(\w+)(\d)\.(\d)/g;
var outCome_exec=pattern.exec(someText); //the pattern.lastIndex will be set
console.log(outCome_exec);
outCome_exec = pattern.outCome_exec(someText); //It will search from the lastIndex position this time.
console.log(outCome_exec);
```
2.test()
> From MDN: A RegExp method that tests for a match in a string. It returns true or false.

**String instance method:**

1.match()

> From MDN: A String method that executes a search for a match in a string. 
It returns an array of information or null on a mismatch.  

```javascript

var someText="web2.0 .net2.0";
var pattern=/(\w+)(\d)\.(\d)/g; //notice that g is set . Here why not catch things in () 
var outCome_matc=someText.match(pattern); //["web2.0","net2.0"]

```

2.replace()

> From MDN: A String method that executes a search for a match in a string, 
and replaces the matched substring with a replacement substring.

//todo: 1.some var 2. callback func













