;(function() {
    function Router() {}

    window.Router = new Router();

    //hash bond method
    Router.prototype._hashRoute = function(path, callback) {
        var url = location.hash.slice(1) || '/'

        // 刷新时的处理
        window.addEventListener('load', function() {
            if (url == path) {
                callback && callback()
            }
        }, false);

        //hash变化时的处理
        window.addEventListener('hashchange', function() {
            url = location.hash.slice(1) || '/'
            if (url == path) {
                callback && callback()
            }
        }, false);

        //IE Bugfix
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

    Router.prototype.api = {
        router: this._hashRoute
    }

})();

//Test case
Router.api.route('page', function() {
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