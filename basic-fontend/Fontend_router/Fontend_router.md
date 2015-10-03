####支持hashchange事件的方式
同时对IE6，7不支持onhashchange event 用轮询的方式进行兼容

```javascript
;(function() {
    function Router() {}

    window.Router = new Router();

    Router.prototype.route = function(path, callback) {
        var url = location.hash.slice(1) || '/'

        // handle for refresh and load
        window.addEventListener('load', function() {
            if (url == path) {
                callback && callback()
            }
        }, false);

        //handle for the hash bond change
        window.addEventListener('hashchange', function() {
            url = location.hash.slice(1) || '/'
            if (url == path) {
                callback && callback()
            }
        }, false);

        //IE6,7 Bugfix
        if ("onhashchange" in window) {
            return;
        }
        setInterval(function() {
            var newHash = location.hash.slice(1) || '/';

            if (newHash !== url && newHash === path) {
                url = newHash
                callback && callback();
            }

        }, 100)
    }

})();

//Test case
Router.route('page', function() {
    alert('page loaded');
    $.ajax({
        url: './section.html',
        type: 'get'
    }).success(function(el) {
        alert('get it');
        console.log(el);
    }).fail(function() {
        alert('not find');
    })
})
```

####HTML的方式History API. 

使用原生的方式，URL中可以不带`\#`标识符 不用hash bond的方式，更利于SEO的优化

API：
> /*Returns the number of entries in the joint session history.*/   
  **window.history.length**

> /*Returns the current state object.*/  
  **window.history.state**

> /*Goes back or forward the specified number of steps in the joint session history.A zero delta will reload the current page.If the delta is out of range, does nothing.*/  
  **window.history.go( [ delta ] )**

> /*Goes back one step in the joint session histor.If there is no previous page, does nothing.*/   
  **window.history.back()**

> /*Goes forward one step in the joint session histor.If there is no next page, does nothing.*/  
  **window.history.forward()**

> /*Pushes the given data onto the session history, with the given title, and, if provided and not null, the given URL.*/  
  **window.history.pushState(data, title [url] )**

> /*Updates the current entry in the session history to have the given data, title, and,if provided and not null, URL.*/  
  **window.history.replaceState(data, title [url] )**



> 资源：  
> http://tonylee.pw/2015/03/%E6%B5%85%E6%9E%90web%E5%BC%80%E5%8F%91%E4%B8%AD%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F-2/  
> http://www.walkerbe.com/javascript-router.html  
> [Interactive web clients: frontend routing or backend routing?](http://calvinx.com/2014/05/16/interactive-web-clients-frontend-routing-or-backend-routing/)   
> [HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History)  
> Pjax:   
> [A modern JavaScript router in 100 lines](http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url)
> [Manipulating the browser history](https://developer.mozilla.org/en-US/docs/Web/API/History_API)  

