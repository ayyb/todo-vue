<template>
  <ul id="todolist">
    <li id="container" v-for="(data,idx) in todos" :key="data.id">
      <input type="checkbox" :id="idx" />
      <label :for="idx">
        <p class="list__text">{{ data }}</p>
      </label>
      <p class="list__date">5/26</p>
      <button class="list__delete" @click="del(idx)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ToDoList.vue",
  computed: {
    todos() {
      return this.$store.state.todos
    } },
  methods:{
    del(idx){
      this.$store.commit('delTodo',idx)
    }
  }

}
</script>

<style scoped>
ul li{
  list-style: none;
}
.list__text{
  display : inline-block;
}
.list__date{
  padding: 10px;
  width: 30px;
  display : inline-block;
}
#container{
  height: 50px;
}
</style>