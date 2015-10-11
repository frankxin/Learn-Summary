#Backbone Basic

##Models

Models can be created by extending `Backbone.Model`

```javascript
var Todo = Backbone.Model.extend({})
```
* **initialize()**  
The initialize() method is called when a new instance of a model is created
```javascript
var Todo = Backbone.Model.extend({
	initialize: function(){
		console.log('initialize Todo instance')
	}
})
```

* **Default values**  

To defined some default data

```javascript
var Todo = Backbone.Model.extend({
	defaults: {
		text: '',  
		completed: false
	}
});
```

* **Getter and Setters**  

Model.get  

```javascript
var Todo = Backbone.Model.extend({
	defaults: {
		text: '',  
		completed: false
	}
});

var todo1 = new Todo({
	text: 'work'
})
todo1.get('text') // get 'work'
```

* **Model.toJSON()**

* **Model.set()**

* **Listen to change for your model**

* **validation**

##View

View can be created by extending `Backbone.View.extend({})`

* **el**  

To minimize the num of reflows and repaints

* **render()**

* **Event hash**

##Collections