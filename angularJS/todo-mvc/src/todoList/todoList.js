var todoApp = angular.module('todoApp',[]);

todoApp.controller('todoListControler',function(){

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
  console.log(this)
})