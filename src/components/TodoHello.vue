<template>
  <div>
    <h1>My todo List 😊</h1>
    <h2>Hello!</h2>
    <h3>What is your name?</h3>
    <v-responsive
        class="mx-auto"
        max-width="344"
    >
    <v-text-field
        clearable
        outlined
        label="name"
        id="user-name" v-model="userName" v-on:keyup.enter="addUserName"
    ></v-text-field>
    </v-responsive>
    <v-btn @click="addUserName">Enter</v-btn>
  </div>
  <!--모달 관련-->
  <v-dialog v-model="showModal" max-width="500">
    <Modal v-on:close="showModal = false">
      <template v-slot:modal-text>{{modalText}}</template>
    </Modal>
  </v-dialog>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  name: "TodoHello",
  components:{
    Modal
  },
  data(){
    return {
      userName:"",
      showModal:false,
      modalText:'',
    }
  },
  methods:{
    addUserName(){
      if(this.userName === ''){
        this.showModal = !this.showModal;
        this.modalText = "Please enter a name."
        return
      }
      this.$store.commit('addName', this.userName)
      this.$emit("addName", this.userName); //이벤트 발생
    }
  }
}
</script>

<style scoped>

</style>