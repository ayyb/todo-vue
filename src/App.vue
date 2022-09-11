<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div id="app">
    <div v-if="userName">
      <Header />
      <Title :propName="userName"/>
      <ToDoInput @add-to-do="addTodo"/>
      <ToDoList :todos="todos"/>
      <Footer />
    </div>
    <div v-else>
      <TodoHello v-on:addName="addUserName" />
    </div>
  </div>

</template>

<script>
import Title from './components/Title.vue'
import ToDoInput from './components/ToDoInput.vue'
import ToDoList from './components/ToDoList.vue'
import Header from './components/Header.vue'
import Footer from './components/TodoFooter.vue'
import TodoHello from './components/TodoHello.vue'

export default {
  name: 'App',
  components: {
    Title,
    ToDoInput,
    ToDoList,
    Header,
    Footer,
    TodoHello
  },
  data(){
    return{
        userName: ''
    }
  },
  created(){
    this.userName = this.$store.state.name
  },
  methods:{
    addTodo(content){
      this.todos.push(content)
    },
    addUserName(userName){
      this.userName = userName
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
