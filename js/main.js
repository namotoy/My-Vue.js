'use strict'
{

var likeComponent = Vue.extend({
  data: function(){
    return {
      count :0
    }
  },
  template: '<button @click="countUp">いいね{{ count }}</button>',
  methods: {
    countUp: function(){
      this.count++;
    }
  }
  });

var vm = new Vue({
  el:"#app",
  
  components: {
  'like-component': likeComponent
  },

  data: {
    newItem:'',
    todos: [
  //     {
  //     title: 'task 1',
  //     isDone: true
  //   },{
  //     title: 'task 2',
  //     isDone: true
  //   },{
  //     title: 'task 3',
  //     isDone: false
  // }
]
  },
  watch: {
    // todos: function(){
    //   localStorage.setItem('todos', JSON.stringify(this.todos));
    //   alert('データを保存しました');
    // }
    todos: {
      handler: function(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
        // alert('データを保存しました');
      },
      deep:true
    }
  },
mounted: function(){
  this.todos = JSON.parse(localStorage.getItem('todos')) || [];
},

  methods: {
    addItem:function(){
      var item = {
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
    },
    purge:function(){
      if (!confirm('消去を完了しますか？')){
        return;
      }
      // this.todos = this.todos.filter(function(todo){
      //   return !todo.isDone;
      // });
      this.todos = this.remaining;
    }
  },
  computed: {
    remaining: function(){
      // var items = this.todos.filter(function(todo){
      //   return !todo.isDone;
      // });
      return this.todos.filter(function(todo){
        return !todo.isDone;
      });
    }
  }
});
}
