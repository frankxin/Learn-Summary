
##Reference  

* [Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
* [W3 HTTP method defined](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)

##Ajax cache

Generally POST method don't have cache , unless the response includes appropriate Cache-Control or Expires header fields

About GET method : you can detect E-tag and If-Modified-Since in the HTTP response and send with these keys next time.
And If you want to no-cache for GET , you can generate a timestamp to parmater like `new Date().getTime()`.

##upload files : [using Form Data](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects)


