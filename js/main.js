'use strict'
{
var vm = new Vue({
  el:"#app",
  data: {
    newItem:'',
    // name: 'namoto'
    todos: [{
      title: 'task 1',
      isDone: true
    },{
      title: 'task 2',
      isDone: true
    },{
      title: 'task 3',
      isDone: false
  }]
  },
  methods: {
    addItem:function(){
      var item={
        title: this.newItem,
        isDone:false
      };
      this.todos.push(item);
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
