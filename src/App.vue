<!--<template>-->
<!--  &lt;!&ndash;  <img alt="Vue logo" src="./assets/logo.png">&ndash;&gt;-->
<!--  <div id="app">-->
<!--    <div v-if="userName">-->
<!--      <Header />-->
<!--      <Title :propName="userName"/>-->
<!--      <ToDoInput @add-to-do="addTodo"/>-->
<!--      <TodoController />-->
<!--      <ToDoList/>-->
<!--      <Footer />-->
<!--    </div>-->
<!--    <div v-else>-->
<!--      <TodoHello v-on:addName="addUserName" />-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->
<template>
  <v-layout style="z-index: 0">
    <v-main>
      <div id="app">
        <div v-if="userName">
          <Header />
          <Title :propName="userName"/>
          <ToDoInput />
          <TodoController />
          <v-divider max-width="344"></v-divider>
          <ToDoList/>
          <v-divider></v-divider>
          <Footer />
        </div>
        <div v-else>
          <TodoHello />
        </div>
      </div>

    </v-main>
  </v-layout>

</template>


<script>
import Title from './components/Title.vue'
import ToDoInput from './components/ToDoInput.vue'
import ToDoList from './components/ToDoList.vue'
import Header from './components/Header.vue'
import Footer from './components/TodoFooter.vue'
import TodoHello from './components/TodoHello.vue'
import TodoController from "@/components/TodoController";

export default {
  name: 'App',
  components: {
    Title,
    ToDoInput,
    ToDoList,
    Header,
    Footer,
    TodoHello,
    TodoController,
  },
  data(){
    return{
      //userName: '',
    }
  },
  computed:{
    userName(){
      return this.$store.state.name
    }
  },
  methods:{
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
