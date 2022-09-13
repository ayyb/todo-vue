<template>
      <v-container class="grey">
            <v-text-field solo type="text" v-model="content" @keypress.enter="addTodo" placeholder="Enter your task here"></v-text-field>
            <v-btn type="submit" @click="addTodo" class="w-20">add</v-btn>
      </v-container>
      <v-dialog v-model="showModal" max-width="500">
        <Modal v-on:close="showModal = false">
          <template v-slot:modal-text>{{modalText}}</template>
        </Modal>
      </v-dialog>

</template>

<script>
import getDate from "@/components/common/getDate";
import Modal from "@/components/Modal";
export default {
  components:{
    Modal
  },
  name: "ToDoInput.vue",
  data(){
    return {
      content:'',
      showModal: false,
      modalText:'',
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
      //빈 내용 체크
      if(this.content === ''){
        this.showModal = !this.showModal;
        this.modalText = "The form is empty. Please enter your task.";
        return
      }
      //중복 내용 체크
      for(let i =0; i<this.$store.state.todos.length; i++){
        if(this.$store.state.todos[i].content === todoItem.content){ //content 내용으로 비교
          this.showModal = !this.showModal;
          this.modalText = "I think you've already had the task.";
          return
        }
      }
      this.$store.commit('addTodo', todoItem)
      this.content = '' //초기화
    }
  }
}
</script>

<style scoped>

</style>