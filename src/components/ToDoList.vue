<template>
  <ul id="todolist">
    <li id="container" v-for="(data,idx) in todos" :key="data.id">
      <input type="checkbox" :id="idx" :checked="data.completed === true" @change="toggleCheck(data,idx)"/>
      <template v-if="data.editable">
        <input type="text" v-model="editContext">
        <button @click="notShow(data,idx)">edit</button>
      </template>
      <label :for="idx" v-else>
        <span class="list__text">{{ data.content }}</span>
      </label>
      <p class="list__date">{{ data.createdDate }}</p>
      <template v-if="!data.editable">
        <button class="list__modify" @click="modify(data)">Modify</button>
        <button class="list__delete" @click="del(idx)">Delete</button>
      </template>

    </li>
  </ul>
</template>

<script>
export default {
  name: "ToDoList.vue",
  data(){
    return{
      show:false,
      editContext:'',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    } },
  methods:{
    del(idx){
      this.$store.commit('delTodo',idx)
    },
    modify(data){
      data.editable = true
      this.editContext = data.content
    },
    notShow(data,idx){
      let dataObj = {context : this.editContext, idx:idx}
      this.$store.commit('editContent',dataObj)
      data.editable = false
    },
    toggleCheck(data,idx){
      let dataObj  = { data : !data.completed, idx: idx }
      console.log(dataObj)
      this.$store.commit('changeCheck',dataObj)
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
input[type=checkbox]:checked + label p{
  color:gray;
  text-decoration: line-through;
}
</style>