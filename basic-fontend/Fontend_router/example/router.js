//todo: 拦截源URL请求并用自己的navigator方法作为导航
//todo: History api practice
//Inspire from :
// http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url/
//singleton

var Router = {

    routes: [],

    /**
     * [mode] mode is use history api or hash bond
     * @type {String}
     */
    mode: null,

    /**
     * [root] root is which position you begin with.
     * @type {String}
     */
    root: '/',

    /**
     * [config]
     * @param  {Object} options 
     * Options have two attributes , one is 'mode' ,the other one is 'root'
     * @return {Object} the singleton itself
     */
    config: function(options) {
        this.mode = options && options.mode && options.mode == 'history' 
                    && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
        return this;
    },
    getFragment: function() {
        var fragment = '';
        if(this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
        } else {
            var match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    },

    /**
     * [clearSlashes]
     * @param  {String} path
     * @return {String} 
     * Clear slashes at font and end of the path
     */
    clearSlashes: function(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    },
    route: function(re, handler) {
        if(typeof re == 'function') {
            handler = re;
            re = '';
        }
        this.routes.push({ re: re, handler: handler});
        return this;
    },
    remove: function(param) {
        for(var i=0, r; i<this.routes.length, r = this.routes[i]; i++) {
            if(r.handler === param || r.re.toString() === param.toString()) {
                this.routes.splice(i, 1); 
                return this;
            }
        }
        return this;
    },

    /**
     * [flush] flush it(clear it)!
     * @return {Object} the singleton instance
     */
    flush: function() {
        this.routes = [];
        this.mode = null;
        this.root = '/';
        return this;
    },

    check: function(f) {
        var fragment = f || this.getFragment();
        for(var i=0; i<this.routes.length; i++) {
            var match = fragment.match(this.routes[i].re);
            if(match) {
                match.shift();
                this.routes[i].handler.apply({}, match);
                return this;
            }           
        }
        return this;
    },

    listen: function() {
        var self = this;
        var current = self.getFragment();
        var fn = function() {
            if(current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
        }
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
        return this;
    },
    navigate: function(path) {
        path = path ? path : '';
        if(this.mode === 'history') {
            history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href.match(/#(.*)$/);
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }
        return this;
    }
}

// configuration
Router.config({ mode: 'history'});

// returning the user to the initial state
Router.navigate();

// adding routes
Router
.route(/about/, function() {
    console.log('about');
})
.route(/products\/(.*)\/edit\/(.*)/, function() {
    console.log('products', arguments);
})
.route(function() {
    console.log('default');
})
.listen();

// forwarding
Router.navigate('/about');