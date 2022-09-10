<template>
  <div>
    <h1>Hello!</h1>
    <h3>What is your name?</h3>
<!--    <div class="hello">What is your name?</div>-->
    <label for="user-name">Name : </label>
    <input type="text" id="user-name" v-model="userName" v-on:keyup.enter="addUserName" />
    <button @click="addUserName">Enter</button>
  </div>
</template>

<script>
export default {
  name: "TodoHello",
  data(){
    return {
      userName:""
    }
  },
  methods:{
    addUserName(){
      this.$store.commit('addName', this.userName)
      this.$emit("addName", this.userName); //이벤트 발생
    }
  }
}
</script>

<style scoped>

</style>