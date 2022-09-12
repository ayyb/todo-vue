<template>
  <div>
    <div id="todoinput">
      <input type="text" v-model="content" @keypress.enter="addTodo" placeholder="Enter your task here"/>
      <button type="submit" @click="addTodo">add</button>
    </div>
  </div>
</template>

<script>
import getDate from "@/components/common/getDate";
export default {
  name: "ToDoInput.vue",
  data(){
    return {
      content:''
    }
  },
  methods:{
    addTodo(){
      // vuex commit
      let todoItem = {
        content : this.content,
        createdDate : `${getDate().month}/${getDate().date}`,
        completed: false,
        editable: false,
      }
      this.$store.commit('addTodo', todoItem)
      this.content = '' //초기화
    }
  }
}
</script>

<style scoped>

</style>