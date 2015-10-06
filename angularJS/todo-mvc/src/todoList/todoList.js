var todoApp = angular.module('todoApp',[]);

todoApp.controller('todoListControler',function(){

  //model
  this.todos = [{
    text: "test task1",
    done: false
  },
  {
    text: "test task2",
    done: false
  }];

  this.addTodo = function(){

    this.todos.push({text:this.newTodoText, done:false});
    this.newTodoText = "";

  }

  this.remaining = function(){

    var count = 0;
    angular.forEach(this.todos , function(todo){
      count += todo.done ? 0 : 1;
    })
    return count;

  }

  this.archive = function(){
    
    var newTodos = [],
        todos = this.todos

    angular.forEach(this.todos , function(todo,key){
      if(!todo.done){newTodos.push(todo)}
    })

    this.todos = newTodos;

  }
  console.log(this)
})