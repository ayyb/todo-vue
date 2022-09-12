<template>
      <v-container class="grey">
            <v-text-field solo type="text" v-model="content" @keypress.enter="addTodo" placeholder="Enter your task here"></v-text-field>
            <v-btn type="submit" @click="addTodo" class="w-20">add</v-btn>
      </v-container>
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
        time : `${getDate().time}`,
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