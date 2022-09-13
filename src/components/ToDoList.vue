<template>
<!--  <ul id="todolist">-->
<!--    <template v-if="isEmpty">-->
<!--      <ul class="list" v-if="isEmpty">-->
<!--        <li>데이터가 없어용 😒😒</li>-->
<!--      </ul>-->
<!--    </template>-->
<!--    <li id="container" v-for="(data,idx) in todos" :key="data.id" v-else>-->
<!--      <input type="checkbox" :id="idx" :checked="data.completed === true" @change="toggleCheck(data,idx)"/>-->
<!--      <template v-if="data.editable">-->
<!--        <input type="text" v-model="editContext">-->
<!--        <button @click="notShow(data,idx)">edit</button>-->
<!--      </template>-->
<!--      <label :for="idx" v-else>-->
<!--        <span class="list__text">{{ data.content }}</span>-->
<!--      </label>-->
<!--      <p class="list__date">{{ data.createdDate }}</p>-->
<!--      <template v-if="!data.editable">-->
<!--        <v-btn class="list__modify" @click="modify(data)">Modify</v-btn>-->
<!--        <v-btn class="list__delete" @click="del(idx)">Delete</v-btn>-->
<!--      </template>-->

<!--    </li>-->
<!--  </ul>-->
  <div v-if="isEmpty">
        <p class="text-center">데이터가 없어용 😒😒</p>
  </div>

    <v-list-item value="widgets" v-for="(data,idx) in todos" :key="data.id">
      <v-row align="center">
        <!--cols는 차지하는 범위 최대 12-->
      <v-col cols="1">
        <v-container fluid>
          <v-checkbox
              class="shrink"
              color="indigo"
              hide-details
              v-model="data.completed"
              @change="toggleCheck(data,idx)"
          ></v-checkbox>
        </v-container>
        </v-col>
        <v-col>
          <v-container fluid class="d-flex">
          <template v-if="data.editable">
            <v-text-field outlined v-model="editContext" class="mt-5 mr-3"></v-text-field>
            <v-btn class="ma-auto d-inline" @click="notShow(data,idx)">edit</v-btn>
          </template>
          <template v-else>
            <v-list-item-title class="" :class="{'text-decoration-line-through' : data.completed === true } "
            >{{ data.content }}</v-list-item-title>
          </template>
          </v-container>
      </v-col>
        <div class="float-right">
          <v-btn class="ma-2" @click="modify(data)">Modify</v-btn>
          <v-btn class="mr-4" @click="del(idx)">Delete</v-btn>
        </div>
      </v-row>
    </v-list-item>


</template>


<script>
export default {
  name: "ToDoList.vue",
  data(){
    return{
      show:false,
      editContext:'',
      classCheck:false
    }
  },
  computed: {
    classObject(){
      return{
        'text-decoration-line-through' : true
      }
    },
    isEmpty(){
      return this.$store.state.todos.length <= 0
    },
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
      console.log(data.completed,idx)
      // let dataObj  = { data : !data.completed, idx: idx }
      // this.$store.commit('changeCheck',dataObj)
    }
  }

}
</script>

<style scoped>
ul li{
  list-style: none;
}
input[type=checkbox]:checked + label p{
  color:gray;
  text-decoration: line-through;
}
</style>