<template>
  <div>
    <div id="todoinput">
      <input type="text" v-model="content" @keypress.enter="addTodo" placeholder="Enter your task here"/>
      <button type="submit" @click="addTodo">add</button>
    </div>
  </div>
</template>

<script>
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
      this.$store.commit('addTodo', this.content)
      this.content = '' //초기화
    }
  }
}
</script>

<style scoped>

</style>