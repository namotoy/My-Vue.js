'use strict'
{
var vm = new Vue({
  el:"#app",
  data: {
    newItem:'',
    // name: 'namoto'
    todos: [
      'task 1',
      'task 2',
      'task 3'
    ]
  },
  methods: {
    addItem:function(){
      this.todos.push(this.newItem);
      this.newItem = '';
    },
    deleteItem:function(index){
      if (confirm('本当にいいですか?')){
        this.todos.splice(index,1);
      }
    }
  }
});
}
